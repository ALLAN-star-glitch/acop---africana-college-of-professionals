// menuItems.ts
export const desktopMenuItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'courses', label: 'Courses', href: '/courses' },
  { id: 'admission', label: 'Admission', href: '/admission' },
  { id: 'news', label: 'News', href: '/news' },  // Moved here
  { id: 'masomo', label: 'Masomo Portal', href: 'https://moodle-200882-0.cloudclusters.net/', external: true },
  { id: 'contact', label: 'Contact', href: '/contact' },
]

export const authMenuItems = [
  { label: 'Register', href: '#register', type: 'button' },
  { label: 'Login', href: '#login', type: 'link' },
]