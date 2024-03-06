import { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";

const FavCardsPage = () => {
  const { cards, isPending, error, handleDeleteCard, handleGetFavCards } =
    useCards();

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetFavCards();
  }, []);

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  });

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite cards"
      />
      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDeleteCard={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavCardsPage;
