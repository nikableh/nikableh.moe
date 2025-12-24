function createBirthday(day: number, month: number, year: number): Date {
  // Month in JavaScript Date is 0-based (0 = January, 11 = December)
  return new Date(year, month - 1, day);
}

function calculateAge(birthDate: Date): number {
  const today = new Date();
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

function isTodayMyBirthday(birthDate: Date): boolean {
  const today = new Date();

  return (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  );
}

export const useBirthday = () => {
  const birthDate = ref(createBirthday(1, 8, 2004));
  const isBirthday = ref(isTodayMyBirthday(birthDate.value));
  const age = ref(calculateAge(birthDate.value));

  return { birthDate, isBirthday, age }
}
