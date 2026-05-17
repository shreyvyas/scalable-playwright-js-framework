import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  
  fullyParallel: false,

  reporter: 'html',
  
  use: {
    headless: false,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

  ],

 
});
