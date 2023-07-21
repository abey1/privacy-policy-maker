import {
  Card,
  Introduction,
  PersonalData,
  Cookies,
  Retention,
  Merger,
  KeepDataSafe,
  ChildrenPrivacy,
  YourRights,
  Changes,
  ContactUs,
} from "./components";
import "./app.scss";

const data = [
  {
    rollNo: "1",
    title: "introduction",
    content: <Introduction />,
  },
  {
    rollNo: "2",
    title: "personal data we collect",
    content: <PersonalData />,
  },
  {
    rollNo: "3",
    title: "cookies",
    content: <Cookies />,
  },
  {
    rollNo: "4",
    title: "Retention & Deletion",
    content: <Retention />,
  },
  {
    rollNo: "5",
    title: "Merger or Acquisition",
    content: <Merger />,
  },
  {
    rollNo: "6",
    title: "how we keep your data safe",
    content: <KeepDataSafe />,
  },
  {
    rollNo: "7",
    title: "children's privacy",
    content: <ChildrenPrivacy />,
  },
  {
    rollNo: "8",
    title: "your rights for your personal data",
    content: <YourRights />,
  },
  {
    rollNo: "9",
    title: "Changes",
    content: <Changes />,
  },
  {
    rollNo: "10",
    title: "Contact Us",
    content: <ContactUs />,
  },
];
const App = () => {
  return (
    <div className="app_container">
      <div className="main_title">privacy policy</div>
      {data.map((dataItem) => {
        return (
          <Card
            rollNo={dataItem.rollNo}
            title={dataItem.title}
            content={dataItem.content}
          />
        );
      })}
    </div>
  );
};

export default App;
