import Step from "../Step/Step";
import styles from "./setupGuide.module.scss";
import personPortal from "@/assets/personPortal.svg";
import computerIcon from "@/assets/computer.svg";
import logicArrowIcon from "@/assets/logic-arrow.svg";
import addCircleOutline from "@/assets/add-circle-outline.svg";
import type { BaseCard, FullWidthCard, SetupCard } from "../../types/Setup";

const EVENT_SETUP_TITLE = "Event setup guide";
const EVENT_SETUP_DETAILS =
  "See the available list of modules below. We suggest that you start with the attendee module.";

const STEP_1: FullWidthCard = {
  cardType: "fullWidth",
  items: [
    {
      title: "General",
      description: "Define Attendee types & attributes",
    },
    {
      title: "Title",
      description:
        "Description that explains the value goes here. Description that explains the value goes here.",
    },
    {
      title: "Title",
      description:
        "Description that explains the value goes here. Description that explains the value goes here.",
    },
  ],
};

const STEP_2: SetupCard[] = [
  {
    icon: logicArrowIcon,
    title: "Attendee Registration",
    description: "Start by creating a general registration workflow",
    cardType: "default",
  },
  {
    icon: logicArrowIcon,
    title: "Attendee Registration",
    description: "Start by creating a general registration workflow",
    cardType: "default",
  },
  {
    icon: logicArrowIcon,
    title: "Attendee Registration",
    description: "Start by creating a general registration workflow",
    cardType: "default",
  },
];

const STEP_2_NEW_CARD: BaseCard = {
  icon: addCircleOutline,
  description: "Add Registration Workflow",
};

const STEP_3: SetupCard[] = [
  {
    icon: computerIcon,
    title: "Attendee Portal",
    description:
      "Manage the portal that attendees will see after they've register for your event.",
    cardType: "default",
  },
];

const SetupGuide = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2>{EVENT_SETUP_TITLE}</h2>
        <p>{EVENT_SETUP_DETAILS}</p>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <img src={personPortal} alt="" />
          <h3>Attendee</h3>
        </div>
      </div>
      <Step
        stepCount={"Step 1"}
        instructions={"Base settings."}
        fullCardDetails={STEP_1}
      />
      <Step
        stepCount={"Step 2"}
        instructions={"Build registration workflows."}
        cardDetails={STEP_2}
        addWorkflow={STEP_2_NEW_CARD}
      />
      <Step
        stepCount={"Step 3"}
        instructions={"Design post-registration experiences."}
        cardDetails={STEP_3}
      />
    </div>
  );
};

export default SetupGuide;
