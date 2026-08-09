// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config=({
  testDir: './tests',
  timeout:40*1000,

  reporter: 'html',

  use: {
   
    browserName:"firefox"
  },
});
module.exports=config;

