function createTabs() {
  var init = function init(tabData, selectorToInsertTab) {
    this.tabData = tabData;
    this.selectorToInsertTab = selectorToInsertTab;
    this.selectorToInsertTabElm = document.getElementById(
      this.selectorToInsertTab
    );
  };

  function createTemplate() {
    // For Tab menu
    let navMenu = document.createElement("div");
    navMenu.setAttribute("id", `${this.selectorToInsertTab}-nav-tab`);
    navMenu.setAttribute("class", "nav");
    // for tab contents
    let tabContent = document.createElement("div");
    tabContent.setAttribute("class", `${this.selectorToInsertTab}-tab-content`);
    this.tabData.forEach((tab) => {
      // for tab menu
      let newTab = document.createElement("div");
      newTab.setAttribute("class", "nav-cont");
      newTab.setAttribute("id", `${this.selectorToInsertTab}-${tab.id}`);
      newTab.setAttribute("tabindex", 1);
      newTab.innerText = tab.tabHeading;
      navMenu.appendChild(newTab);
      // for tab content
      let tabpane = document.createElement("div");
      tabpane.setAttribute("class", "tab-pane");
      tabpane.setAttribute("id", `${this.selectorToInsertTab}-${tab.id}-pane`);

      let contentHeading = document.createElement("h4");
      contentHeading.innerText = tab.content.heading;

      tabpane.appendChild(contentHeading);

      let content = document.createElement("p");
      content.innerHTML = tab.content.content;
      tabpane.appendChild(content);

      tabContent.appendChild(tabpane);
    });
    this.selectorToInsertTabElm.appendChild(navMenu);
    this.selectorToInsertTabElm.appendChild(tabContent);
    addingListener.call(this);
  }

  function addingListener() {
    const element = document.getElementById(
      `${this.selectorToInsertTab}-nav-tab`
    );
    element.addEventListener("click", onTabClick.bind(this), false);
  }

  function onTabClick(event) {
    let activeTabs = document.querySelectorAll(
      '[id^="' + this.selectorToInsertTab + '"]'
    );
    // deactivate existing active tab and panel
    activeTabs.forEach(function (tab) {
      tab.className = tab.className.replace("active", "");
    });
    // activate new tab and panel
    event.target.className += " active";
    document.getElementById(`${event.target.id}-pane`).className += " active";
  }
  return {
    init: init,
    createTemplate: createTemplate,
  };
}

const tabData = [
  {
    tabHeading: "Home",
    id: "home",
    content: {
      heading: "Home Panel Content",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.",
    },
  },
  {
    tabHeading: "Profile",
    id: "profile",
    content: {
      heading: "Profile Panel Content",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.",
    },
  },
  {
    tabHeading: "Messages",
    id: "messages",
    content: {
      heading: "Messages Panel Content",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.",
    },
  },
];

const tabData1 = [
  {
    tabHeading: "Home1",
    id: "home1",
    content: {
      heading: "Home Panel Content1",
      content:
        "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.",
    },
  },
  {
    tabHeading: "Profile1",
    id: "profile1",
    content: {
      heading: "Profile Panel Content1",
      content:
        "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.",
    },
  },
  {
    tabHeading: "Messages1",
    id: "messages1",
    content: {
      heading: "Messages Panel Content1",
      content:
        "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta. Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.",
    },
  },
];

const tabs = createTabs();
tabs.init(tabData, "tab-cntainer-1");
tabs.createTemplate();

const tabs1 = createTabs();
tabs1.init(tabData1, "tab-cntainer-2");
tabs1.createTemplate();
