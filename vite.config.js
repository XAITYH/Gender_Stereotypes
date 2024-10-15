import { defineConfig } from 'vite';  
import preact from '@preact/preset-vite';  

export default defineConfig({  
  plugins: [preact()],  
  base: '/Gender_Stereotypes/',
  build: {  
    rollupOptions: {  
      input: {  
        main: './index.html',
        quiz: './quiz.html',  
      }  
    }  
  }  
});  