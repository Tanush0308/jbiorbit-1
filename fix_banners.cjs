const fs = require('fs');
const path = require('path');

const dir = 'd:/PROJECT/jbidemo/jbidemo/frontend/src/pages/dashboards/shared';

const images = {
  'BusinessInsightsView.jsx': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
  'BusinessProjectReportView.jsx': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80',
  'BusinessToolkitView.jsx': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80',
  'CoFounderView.jsx': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
  'CoursesView.jsx': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80',
  'DocumentaryShootsView.jsx': 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=2000&q=80',
  'FranchiseOptionsView.jsx': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80',
  'InvestmentFacilitationView.jsx': 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2000&q=80',
  'MentorshipView.jsx': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80',
  'NetworkingView.jsx': 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=80',
  'PodcastsView.jsx': 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=2000&q=80',
  'StartupAssistanceView.jsx': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80',
  'WebinarsView.jsx': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2000&q=80'
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Change container background back to white
  content = content.replace(/border-slate-800 dark:border-brand-dark-border overflow-hidden bg-slate-900/g, 'border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white');
  
  const imgUrl = images[file] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80';
  
  // Replace ONLY the first occurrence
  let replaced = false;
  content = content.replace(/<img[\s\S]*?className="absolute inset-0 w-full h-full object-cover[^>]*?>/g, (match) => {
    if (!replaced && match.includes("mix-blend-overlay") || match.includes("opacity-70") || match.includes("opacity-50") || match.includes("opacity-40") || match.includes("opacity-30")) {
      replaced = true;
      return `<img \n          src="${imgUrl}" \n          alt="Banner" \n          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" \n        />`;
    }
    return match;
  });

  // Replace gradient - but ONLY the first one (the hero banner gradient)
  let gradReplaced = false;
  content = content.replace(/className="absolute inset-0 bg-gradient-to-[^"]+"/g, (match) => {
    if (!gradReplaced) {
      gradReplaced = true;
      return 'className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"';
    }
    return match;
  });

  // Replace text colors
  // For the h1
  content = content.replace(/text-white mb-4/g, 'text-slate-900 dark:text-white mb-4');
  
  // For paragraph
  content = content.replace(/text-slate-300 max-w-lg/g, 'text-slate-600 dark:text-slate-300 max-w-lg');
  
  // Remove drop-shadows that were used for white text on images
  content = content.replace(/ drop-shadow-lg/g, '');
  content = content.replace(/ drop-shadow-md/g, '');

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Fixed banners successfully');
