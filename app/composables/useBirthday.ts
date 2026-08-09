import type { InjectionKey } from "vue";

const birthDateKey = Symbol("birthDate") as InjectionKey<Date>;

function parseBirthday(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);

  if (!year || !month || !day) {
    throw new Error(`Birthday must be YYYY-MM-DD, got "${isoDate}"`);
  }

  // Month in JavaScript Date is 0-based (0 = January, 11 = December). Building
  // the parts by hand rather than handing the string to Date keeps the result
  // in the reader's own timezone; parsing "2004-09-27" would pin it to UTC
  // midnight, which is the day before for anyone west of Greenwich.
  return new Date(year, month - 1, day);
}

function calculateAge(birthDate: Date, today: Date): number {
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function isTodayMyBirthday(birthDate: Date, today: Date): boolean {
  return (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  );
}

export const provideBirthday = (isoDate: string) => {
  provide(birthDateKey, parseBirthday(isoDate));
};

export const useBirthday = () => {
  const birthDate = inject(birthDateKey);

  if (!birthDate) {
    throw new Error("useBirthday() needs a provideBirthday() above it");
  }

  // Prerendering freezes the server clock at build time, so it has to reach
  // the client through the payload. Reading it on both sides instead pits a
  // stale server value against a live client one.
  const now = useState("birthday-now", () => Date.now());

  onMounted(() => {
    now.value = Date.now();
  });

  const today = computed(() => new Date(now.value));
  const isBirthday = computed(() => isTodayMyBirthday(birthDate, today.value));
  const age = computed(() => calculateAge(birthDate, today.value));

  return { birthDate, isBirthday, age };
};
