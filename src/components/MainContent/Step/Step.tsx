import type { BaseCard, FullWidthCard, SetupCard } from "../../types/Setup";
import styles from "./step.module.scss";

type Props = {
  stepCount: string;
  instructions: string;
  cardDetails?: SetupCard[];
  fullCardDetails?: FullWidthCard;
  addWorkflow?: BaseCard;
};

const renderDefaultCard = ({ icon, title, description, id }: SetupCard) => {
  return (
    <div className={styles.defaultCard} key={id}>
      <img src={icon} alt="" />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

const renderAddCard = ({ icon, description }: BaseCard) => {
  return (
    <div className={styles.addNewCard}>
      <img src={icon} alt="" />
      <p>{description}</p>
    </div>
  );
};

const renderFullWidthCard = (card: FullWidthCard) => {
  return (
    <div className={styles.fullWidthCard}>
      {card.map(({ title, description, id }) => (
        <div key={id}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  stepCount,
  instructions,
  cardDetails,
  fullCardDetails,
  addWorkflow,
}: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.details}>
        <p className={styles.stepCount}>{stepCount}:</p>
        <p className={styles.instructions}>{instructions}</p>
      </div>
      <div className={styles.cards}>
        {fullCardDetails && renderFullWidthCard(fullCardDetails)}
        {cardDetails && cardDetails.map((card) => renderDefaultCard(card))}
        {addWorkflow && renderAddCard(addWorkflow)}
      </div>
    </div>
  );
};

export default Step;
