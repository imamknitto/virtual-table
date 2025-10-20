#!/usr/bin/env node

/**
 * Bundle analyzer script for knitto-table
 * Helps identify large dependencies and optimize bundle size
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const analyzeBundle = () => {
  console.log('🔍 Analyzing bundle size...\n');
  
  try {
    // Build the project
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check if dist directory exists
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      console.error('❌ Dist directory not found. Build failed.');
      return;
    }
    
    // Analyze bundle files
    const assetsPath = path.join(distPath, 'assets');
    if (fs.existsSync(assetsPath)) {
      const files = fs.readdirSync(assetsPath);
      const jsFiles = files.filter(file => file.endsWith('.js'));
      const cssFiles = files.filter(file => file.endsWith('.css'));
      
      console.log('\n📊 Bundle Analysis Results:');
      console.log('=' .repeat(50));
      
      // Analyze JS files
      console.log('\n📄 JavaScript Files:');
      jsFiles.forEach(file => {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        console.log(`  ${file}: ${sizeKB} KB (${sizeMB} MB)`);
      });
      
      // Analyze CSS files
      console.log('\n🎨 CSS Files:');
      cssFiles.forEach(file => {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        
        console.log(`  ${file}: ${sizeKB} KB`);
      });
      
      // Calculate total size
      const totalSize = files.reduce((total, file) => {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        return total + stats.size;
      }, 0);
      
      const totalSizeKB = (totalSize / 1024).toFixed(2);
      const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
      
      console.log('\n📈 Total Bundle Size:');
      console.log(`  ${totalSizeKB} KB (${totalSizeMB} MB)`);
      
      // Recommendations
      console.log('\n💡 Optimization Recommendations:');
      console.log('=' .repeat(50));
      
      if (totalSize > 500 * 1024) { // 500KB
        console.log('⚠️  Bundle size is large (>500KB). Consider:');
        console.log('   - Implementing more aggressive code splitting');
        console.log('   - Lazy loading non-critical components');
        console.log('   - Removing unused dependencies');
        console.log('   - Using dynamic imports for heavy features');
      } else if (totalSize > 250 * 1024) { // 250KB
        console.log('✅ Bundle size is moderate (250-500KB). Consider:');
        console.log('   - Fine-tuning code splitting');
        console.log('   - Optimizing images and assets');
      } else {
        console.log('🎉 Bundle size is good (<250KB)!');
      }
      
      // Check for large individual files
      const largeFiles = files.filter(file => {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        return stats.size > 100 * 1024; // 100KB
      });
      
      if (largeFiles.length > 0) {
        console.log('\n🔍 Large Files (>100KB):');
        largeFiles.forEach(file => {
          const filePath = path.join(assetsPath, file);
          const stats = fs.statSync(filePath);
          const sizeKB = (stats.size / 1024).toFixed(2);
          console.log(`   ${file}: ${sizeKB} KB`);
        });
      }
      
    } else {
      console.log('❌ Assets directory not found in dist folder.');
    }
    
  } catch (error) {
    console.error('❌ Error analyzing bundle:', error.message);
  }
};

// Run analysis
analyzeBundle();
