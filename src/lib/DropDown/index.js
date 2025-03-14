const skillsList = [
    {
        title: "Languages",
        list: ["Python", "Java"],
        icons: ["fa-code"],
        toggle: false,
    },
    {
        title: "Web Technologies",
        list: ["HTML", "CSS", "JavaScript", "TypeScript", "DOM"],
        icons: ["fa-globe"],
        toggle: false
    },
    {
        title: "Frameworks",
        list: ["React", "Firebase"],
        icons: ["fa-cogs"],
        toggle: false
    },
    {
        title: "Databases",
        list: ["MySQL"],
        icons: ["fa-database"],
        toggle: false
    }
]


export default class DropDown {
    skillContainerDom = document.querySelector("#skills-container");
    constructor() {
        this.createDOM()
    }
    createDOM() {
        skillsList.forEach((value) => {
            const skillSubsection = document.createElement("div");
            skillSubsection.classList.add("skill-subsection");
            const skillTitleParent = document.createElement("button");
            skillTitleParent.classList.add("skill-title");
            const skillTitleText = document.createElement('p');
            skillTitleText.textContent = value.title;
            const skillTitleIcon = document.createElement("i");
            skillTitleIcon.classList.add("fas")
            skillTitleIcon.classList.add(value.icons[0]);
            const skillDropDownIcon = document.createElement("i");
            skillDropDownIcon.classList.add("fas");
            skillDropDownIcon.classList.add("fa-chevron-down");
            skillTitleParent.appendChild(skillTitleIcon);
            skillTitleParent.appendChild(skillTitleText);
            skillTitleParent.appendChild(skillDropDownIcon);
            const ul = document.createElement("ul");
            ul.classList.add("skill-dropdown");
            value.list.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            })

            skillTitleParent.addEventListener("click", () => {
                ul.classList.toggle("active");
                value.toggle = !value.toggle;
                skillDropDownIcon.classList.toggle("fa-chevron-down");
                skillDropDownIcon.classList.toggle("fa-chevron-up");
            });

            skillSubsection.appendChild(skillTitleParent);
            skillSubsection.appendChild(ul);
            this.skillContainerDom.appendChild(skillSubsection);
        })
    }
}