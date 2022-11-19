declare global {
	interface Window {
		playBackground(): void;
		playParticles(): void;
		playWaves(): void;
		pauseBackground(): void;
		pauseParticles(): void;
		pauseWaves(): void;
	}
}

export {};
