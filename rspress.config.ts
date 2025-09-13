import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
// import image_leetcode from './docs/images/leetcode.png';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  outDir: 'public',
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },

  themeConfig: {
    // nav:[
    //   { text: 'Guide', link: '/guide/guide' },
    //   { text: 'Blog', link: '/blog/blog' },
    //   { text: 'Projects', link: '/project/project' },
    // ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/TaiChi112',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.com/invite/your-invite-code',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://www.linkedin.com/in/anothai-vichapaiboon-a88790260/',
      }
    ],
  },
  route: {
    exclude: ['components/**/*'],
    include: ['other-dir/**/*']
  }
});
