import type { BaseCard, FullWidthCard, SetupCard } from "../../types/Setup";
import styles from "./step.module.scss";

type Props = {
  stepCount: string;
  instructions: string;
  cardDetails?: SetupCard[];
  fullCardDetails?: FullWidthCard;
  addWorkflow?: BaseCard;
};

type DefaultSetupCard = Extract<SetupCard, { cardType: "default" }>;

const Step = ({
  stepCount,
  instructions,
  cardDetails,
  fullCardDetails,
  addWorkflow,
}: Props) => {
  const defaultCard = ({ icon, title, description }: DefaultSetupCard) => {
    return (
      <div className={styles.defaultCard}>
        <img src={icon} alt="" />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    );
  };

  const addCard = ({ icon, description }: BaseCard) => {
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
        {card.items.map(({ title, description }) => (
          <div key={title}>
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.details}>
        <p className={styles.stepCount}>{stepCount}:</p>
        <p className={styles.instructions}>{instructions}</p>
      </div>
      <div className={styles.cards}>
        {fullCardDetails && renderFullWidthCard(fullCardDetails)}
        {cardDetails &&
          cardDetails.map((card) => {
            return defaultCard(card);
          })}
        {addWorkflow && addCard(addWorkflow)}
      </div>
    </div>
  );
};

export default Step;
