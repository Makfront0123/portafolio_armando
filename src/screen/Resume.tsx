import ContentResume from "../components/ContentResume"


const Resume = () => {
  return (
    <div className="overflow-hidden">
      <h4 className="text-3xl font-semibold flex text-black items-center ">
        RESUME
        <div className="ml-10 sm:min-w-[50vh] py-[1.3px] bg-blue-400">
        </div>
      </h4>
      <div className="flex md:flex-row flex-col">
        <ContentResume
          icon={true}
          title="Work Skills"
          arr={workSkills}
          option="Education"
          array02={education}
        />

        <ContentResume
          icon={false}
          title="Soft Skills"
          arr={softSkills}
          option="Experience"
          array02={experience}
        />
      </div>
    </div>
  )
}


const experience = [
  {
    id: "1",
    title: "Freelancer",
    date: "2022-present",
  },
];

const workSkills = [
  {
    id: "1",
    title: "Astro",
    icon: "vscode-icons:file-type-light-astro",
  },
  {
    id: "2",
    title: "React",
    icon: "vscode-icons:file-type-reactjs",
  },
  {
    id: "3",
    title: "Flutter",
    icon: "vscode-icons:file-type-flutter",
  },
  {
    id: "4",
    title: "Next.js",
    icon: "vscode-icons:file-type-light-next",
  },
];

const education = [
  {
    id: "12",
    title: "UNEFA TACHIRA",
    date: "2017-2022",
    carge: 'System Enginner'
  },
];

const softSkills = [
  {
    id: "1",
    title: "Flexibility",
    icon: "vscode-icons:file-type-light-next",
  },
  {
    id: "2",
    title: "Time Management",
    icon: "vscode-icons:file-type-light-next",
  },
  {
    id: "3",
    title: "Problem Solving",
    icon: "vscode-icons:file-type-light-next",
  },
  {
    id: "4",
    title: "Communication",
    icon: "vscode-icons:file-type-light-next",
  },
];

export default Resume