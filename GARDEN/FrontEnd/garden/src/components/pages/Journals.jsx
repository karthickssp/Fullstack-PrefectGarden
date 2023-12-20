import jsPDF from 'jspdf';
import "../../assets/styles/Journal.css";
import coolcrop from '../../assets/images/coolcrop.png'
import warmcrop from '../../assets/images/warmcrop.png'
import ediblef from '../../assets/images/ediblef.png'
import herbs from '../../assets/images/herbs.png'
import ediblew from '../../assets/images/ediblew.png'
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
function Journals() {
  
  const user = useSelector(selectUser);
  const isLoggedIn = user.user && user.user.username;
  const downloadPDF = (image) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 170; 
    const imgHeight = 250;
    const xPosition = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
    const yPosition = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;
    pdf.setFontSize(18);
    pdf.text('Plant Journal', 20, yPosition + imgHeight + 10);
    pdf.addImage(image, 'PNG', xPosition, yPosition, imgWidth, imgHeight);
    pdf.setFontSize(14);
    pdf.addPage();
    const content = `
      Rose Garden:
      The roses are in full bloom, displaying a breathtaking palette of reds, pinks, and whites. Their fragrance fills the air, attracting bees and butterflies. I spent some time deadheading to encourage new growth and marveled at the intricate beauty of these timeless flowers.

      Vegetable Patch:
      In the vegetable patch, the tomatoes are ripening, promising a bountiful harvest. The zucchinis have grown exponentially overnight, and I can already envision a delicious stir-fry in the near future. It's incredible how a tiny seed transforms into a nourishing meal.

      Succulent Corner:
      The succulents are thriving in their sun-soaked corner. Their fleshy leaves store water, and their resilience never ceases to amaze me. I took some time to propagate a few, ensuring that the succulent family will continue to grow and bring joy.

      New Additions:
      Today, I welcomed a couple of new additions to the plant family. A vibrant orchid found its place on the windowsill, and a delicate fern now graces the shaded corner of the living room. Each plant has its unique care requirements, and I look forward to learning more about their individual needs.

      Reflections:
      As I sit among the greenery with a cup of tea, I reflect on the therapeutic nature of gardening. The act of nurturing plants provides not only a sense of accomplishment but also a connection to the cycles of life. It's a reminder of the importance of patience, care, and the beauty that unfolds when we allow nature to take its course.
    `;
    const lines = pdf.splitTextToSize(content, 170);
    pdf.text(lines, 20, 20);
    if(isLoggedIn){
      pdf.save('PlantJournal.pdf');
    }else{
      alert("Login First!!!")
    }
  };
  return (
    <div className="journal-back">
      <center>
        <h1>Some of published Journals</h1>
      </center>
      <section className="featured">
        <div className="product-list">
          <div className="product-card" onClick={() => downloadPDF(coolcrop)}>
            <img
              src={coolcrop}
              className="product-image1"
            />
          </div>
          <div className="product-card" onClick={() => downloadPDF(warmcrop)}>
            <img
              src={warmcrop}
              className="product-image1"
            />
          </div>
          <div className="product-card"onClick={() => downloadPDF(ediblef)}>
            <img
              src={ediblef}
              className="product-image1"
            />
          </div>
          <div className="product-card" onClick={() => downloadPDF(herbs)}>
            <img
              src={herbs}
              className="product-image1"
            />
          </div>
          <div className="product-card" onClick={() => downloadPDF(ediblew)}>
            <img
              src={ediblew}
              className="product-image1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Journals;
