import fs from 'fs';

const origHtml = fs.readFileSync('index.html', 'utf-8');
const renderedHtml = fs.readFileSync('rendered.html', 'utf-8');

// Insert Schema.org before </head>
const schema = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Débora Bolangno",
      "description": "Mentoria de carreira e liderança executiva",
      "url": "https://deborabolangno.com.br"
    }
    </script>
`;

let newHtml = origHtml.replace('</head>', schema + '\n  </head>');

// Replace <div id="root"></div> with <div id="root">...</div>
newHtml = newHtml.replace('<div id="root"></div>', '<div id="root">' + renderedHtml + '</div>');

fs.writeFileSync('index.html', newHtml);
console.log('Final index.html generated.');
