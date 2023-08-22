//! etrafli axtaris
const moreFilterLink = document.getElementById("main-moreFilter");
const flex3Div = document.querySelector(".flex-3");
const mainFirstSearch = document.getElementById("main-firstsearch");
// ! olke
const countrySelectSelected = document.querySelector(
  ".countries .select-selected"
);
const countrySelectOptions = document.querySelectorAll(
  ".countries .select-options div"
);
//! seherler
const citySelectSelected = document.querySelector(".cities .select-selected");
const citySelectOptions = document.querySelectorAll(
  ".cities .select-options div"
);
// !rayon
const districtSelectSelected = document.querySelector(
  ".districts .select-selected"
);
const districtSelectOptions = document.querySelectorAll(
  ".districts .select-options div"
);
// !emlak
const buildingSelectSelected = document.querySelector(
  ".buildings .select-selected"
);
const buildingSelectOptions = document.querySelectorAll(
  ".buildings .select-options div"
);
// !satis
const offerSelectSelected = document.querySelector(".offers .select-selected");
const offerSelectOptions = document.querySelectorAll(
  ".offers .select-options div"
);
// ! metro
const metroSelectSelected = document.querySelector(".metro .select-selected");
const metroSelectOptions = document.querySelectorAll(
  ".metro .select-options div"
);
// ! nisangah
const targetSelectSelected = document.querySelector(".target .select-selected");
const targetSelectOptions = document.querySelectorAll(
  ".target .select-options div"
);
// !otaq
const bedroomSelectSelected = document.querySelector(
  ".bedrooms .select-selected"
);
const bedroomSelectOptions = document.querySelectorAll(
  ".bedrooms .select-options div"
);

//! etrafli axtaris
moreFilterLink.addEventListener("click", function (event) {
  event.preventDefault();
  if (flex3Div.style.display === "block") {
    flex3Div.style.display = "none";
    mainFirstSearch.style.display = "block";
  } else {
    flex3Div.style.display = "block";
    mainFirstSearch.style.display = "none";
  }
});

//! olke ucun
countrySelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.classList.remove("show");
      container.previousElementSibling.style.backgroundColor = "#fff";
    }
  });

  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    countrySelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    countrySelectSelected.style.backgroundColor = "#fff";
  }
});

countrySelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const countrySelectSelected = optionsContainer.previousElementSibling;

    countrySelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    countrySelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.color = "#fff";
        opt.style.backgroundColor = "#B1924C";
      } else {
        opt.style.backgroundColor = "";
        opt.style.color = "";
      }
    });
    countrySelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      countrySelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      countrySelectSelected.style.backgroundColor = "#fff";
    }
  });
});

//! seher ucun
citySelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.previousElementSibling.style.backgroundColor = "#fff";
      container.classList.remove("show");
    }
  });
  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    citySelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    citySelectSelected.style.backgroundColor = "#fff";
  }
});

citySelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const citySelectSelected = optionsContainer.previousElementSibling;

    citySelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    citySelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.color = "#fff";
        opt.style.backgroundColor = "#B1924C";
      } else {
        opt.style.color = "";
        opt.style.backgroundColor = "";
      }
    });
    citySelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      citySelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      citySelectSelected.style.backgroundColor = "#fff";
    }
  });
});

// !rayon ucun
districtSelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.previousElementSibling.style.backgroundColor = "#fff";
      container.classList.remove("show");
    }
  });
  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    districtSelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    districtSelectSelected.style.backgroundColor = "#fff";
  }
});

districtSelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const districtSelectSelected = optionsContainer.previousElementSibling;

    districtSelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    districtSelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.backgroundColor = "#B1924C";
        opt.style.color = "#fff";
      } else {
        opt.style.color = "";
        opt.style.backgroundColor = "";
      }
    });
    districtSelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      districtSelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      districtSelectSelected.style.backgroundColor = "#fff";
    }
  });
});

// !emlak ucun
buildingSelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.classList.remove("show");
      container.previousElementSibling.style.backgroundColor = "#fff";
    }
  });
  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    buildingSelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    buildingSelectSelected.style.backgroundColor = "#fff";
  }
});

buildingSelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const buildingSelectSelected = optionsContainer.previousElementSibling;

    buildingSelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    buildingSelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.backgroundColor = "#B1924C";
        opt.style.color = "#fff";
      } else {
        opt.style.color = "";
        opt.style.backgroundColor = "";
      }
    });
    buildingSelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      buildingSelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      buildingSelectSelected.style.backgroundColor = "#fff";
    }
  });
});

// !satis ucun
offerSelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.previousElementSibling.style.backgroundColor = "#fff";
      container.classList.remove("show");
    }
  });
  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    offerSelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    offerSelectSelected.style.backgroundColor = "#fff";
  }
});

offerSelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const offerSelectSelected = optionsContainer.previousElementSibling;

    offerSelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    offerSelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.backgroundColor = "#B1924C";
        opt.style.color = "#fff";
      } else {
        opt.style.color = "";
        opt.style.backgroundColor = "";
      }
    });
    offerSelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      offerSelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      offerSelectSelected.style.backgroundColor = "#fff";
    }
  });
});

// !metro ucun
metroSelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.previousElementSibling.style.backgroundColor = "#fff";
      container.classList.remove("show");
    }
  });
  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    metroSelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    metroSelectSelected.style.backgroundColor = "#fff";
  }
});

metroSelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const metroSelectSelected = optionsContainer.previousElementSibling;

    metroSelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    metroSelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.backgroundColor = "#B1924C";
        opt.style.color = "#fff";
      } else {
        opt.style.color = "";
        opt.style.backgroundColor = "";
      }
    });
    metroSelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      metroSelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      metroSelectSelected.style.backgroundColor = "#fff";
    }
  });
});

// !nisangah ucun
targetSelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.previousElementSibling.style.backgroundColor = "#fff";
      container.classList.remove("show");
    }
  });
  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    targetSelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    targetSelectSelected.style.backgroundColor = "#fff";
  }
});

targetSelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const targetSelectSelected = optionsContainer.previousElementSibling;

    targetSelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    targetSelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.backgroundColor = "#B1924C";
        opt.style.color = "#fff";
      } else {
        opt.style.color = "";
        opt.style.backgroundColor = "";
      }
    });
    targetSelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      targetSelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      targetSelectSelected.style.backgroundColor = "#fff";
    }
  });
});

// !otaq ucun
bedroomSelectSelected.addEventListener("click", function () {
  const optionsContainer = this.nextElementSibling;
  const otherContainers = document.querySelectorAll(".select-options.show");

  otherContainers.forEach(function (container) {
    if (container !== optionsContainer) {
      container.previousElementSibling.style.backgroundColor = "#fff";
      container.classList.remove("show");
    }
  });
  optionsContainer.classList.toggle("show");
  if (optionsContainer.classList.contains("show")) {
    bedroomSelectSelected.style.backgroundColor = "#e6e6e6";
  } else {
    bedroomSelectSelected.style.backgroundColor = "#fff";
  }
});

bedroomSelectOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedText = this.textContent;
    const optionsContainer = this.parentElement;
    const bedroomSelectSelected = optionsContainer.previousElementSibling;

    bedroomSelectOptions.forEach(function (opt) {
      opt.classList.remove("selected");
    });

    this.classList.add("selected");

    bedroomSelectOptions.forEach(function (opt) {
      if (opt.classList.contains("selected")) {
        opt.style.backgroundColor = "#B1924C";
        opt.style.color = "#fff";
      } else {
        opt.style.color = "";
        opt.style.backgroundColor = "";
      }
    });
    bedroomSelectSelected.textContent = selectedText;
    optionsContainer.classList.remove("show");
    if (optionsContainer.classList.contains("show")) {
      bedroomSelectSelected.style.backgroundColor = "#e6e6e6";
    } else {
      bedroomSelectSelected.style.backgroundColor = "#fff";
    }
  });
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".form-control")) {
    const optionsContainers = document.querySelectorAll(".select-options");
    optionsContainers.forEach(function (container) {
      container.classList.remove("show");
    });
  }
});
