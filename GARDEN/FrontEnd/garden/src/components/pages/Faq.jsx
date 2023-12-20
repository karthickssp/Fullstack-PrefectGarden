import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import '../../assets/styles/Faq.css';
export default function Faq() {
  return (
    <div className="faq-back">
      <MDBContainer  style={{ maxWidth: "1000px" }}>
        <MDBAccordion  initialActive={1}>
          <MDBAccordionItem 
            collapseId={1}
            headerTitle="What is home gardening?"
          >
            Home gardening refers to the practice of growing{" "}
            <strong>plants, vegetables, herbs, or flowers </strong>in and around
            your home. It can be done in a backyard, on a balcony, or even
            indoors.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="What are the benefits of home gardening?"
          >
            Home gardening offers several benefits, including access to fresh
            and organic produce, reduced grocery bills, improved mental
            well-being, and a connection with nature.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="How do I start a home garden?"
          >
            To start a home garden, begin by selecting a suitable location,
            preparing the soil, choosing the right plants, and providing proper
            care through watering, fertilizing, and regular maintenance.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="Can I garden in a small space or apartment?"
          >
            <strong>Yes</strong>, you can garden in small spaces or apartments
            by using containers, vertical gardening techniques, or choosing
            compact plant varieties that are well-suited for limited space.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle="How often should I water my plants?"
          >
            The frequency of watering depends on the type of plants and
            environmental conditions. Its best to water when the soil feels dry
            to the touch. Overwatering can be as harmful as underwatering.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle="How can I make my garden more eco-friendly?"
          >
            You can make your garden more eco-friendly by using organic
            gardening practices, conserving water, choosing native plants, and
            avoiding chemical pesticides and fertilizers.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </div>
  );
}
