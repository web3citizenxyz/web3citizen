// src/components/SideIcons.tsx
import React from 'react';
import styles from './SideIcons.module.css';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

const downloadPDF = () => {
  const input = document.body; // O especifica el selector de la parte de la página que deseas capturar

  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210; // Ancho A4 en mm
      const pageHeight = 295; // Alto A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('page.pdf');
    })
    .catch((error) => {
      console.error('Error generating PDF:', error);
    });
};
const SideIcons: React.FC = () => {
    return (
        <div className={styles.sideIcons}>
            <div className={styles.iconContainer}>
            <a onClick={downloadPDF}>
                <img src="/icons/guardar-article.svg" alt="Back to top" className={styles.icon} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </a>
            </div>
            <div className={styles.iconContainer}>
               
                <a href='https://x.com/web3citizenxyz?s=21' target='_blank'> 
                    <img src="/icons/descargar-article.svg" alt="Download PDF" className={styles.icon} />
                </a>
            </div>
        </div>
    );
};

export default SideIcons;
