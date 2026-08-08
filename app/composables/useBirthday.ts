function createBirthday(day: number, month: number, year: number): Date {
  // Month in JavaScript Date is 0-based (0 = January, 11 = December)
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

export const useBirthday = () => {
  const birthDate = createBirthday(1, 8, 2004);

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
