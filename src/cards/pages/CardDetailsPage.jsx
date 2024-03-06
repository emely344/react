import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect } from "react";

const CardDetailsPage = () => {
  const { id } = useParams();

  const { card, handleGetCard } = useCards();
  useEffect(() => {
    handleGetCard(id);
  }, [id]);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find all the information about the business you are looking for"
      ></PageHeader>
      <div>
        {" "}
        Details of card: {card?.title} {card?.subtitle}
      </div>
    </Container>
  );
};

export default CardDetailsPage;
