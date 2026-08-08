import confetti from "canvas-confetti";

// Deliberately not a component: Vue's SSR renderer emits nothing for an empty
// template while the client renderer emits a comment node, so a component that
// draws nothing still hydrates as a mismatch.
export const useBirthdayConfetti = () => {
  const { isBirthday } = useBirthday();

  let animationId: number | null = null;

  function fireConfetti() {
    const colors: string[] = [
      "#f2f641",
      "#f5a02c",
      "#25c4f5",
      "#83f658",
      "#cd32ce",
      "#f55c7b",
    ];

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    confetti({
      particleCount: 1,
      startVelocity: 0,
      colors: [colors[Math.floor(Math.random() * colors.length)]!],
      ticks: 50,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.8 - 0.2,
      },
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (isBirthday.value) {
      animationId = requestAnimationFrame(fireConfetti);
    }
  }

  function stopConfetti() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  // confetti() reaches for document, so none of this can run while prerendering.
  onMounted(() => {
    watch(
      isBirthday,
      (newValue) => {
        if (newValue) {
          if (animationId === null) {
            fireConfetti();
          }
        } else {
          stopConfetti();
        }
      },
      { immediate: true }
    );
  });

  onUnmounted(stopConfetti);
};
