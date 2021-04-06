const departments = {
  Chemical: {
    info: [
      "Chemical Department is supported by wet as well as instrumental techniques.",
      "Laboratory uses Vacuum Emission Spectrometer, Flame Atomic Absorption Spectrophotometer as well as Carbon- Sulphur Analyser for its Instrumental Analysis.",
      "Wet laboratory is used as a support for the instrumental techniques as well as verification of results by independent methods.",
      "Laboratory has an exhaustive list reference material for Iron Base, Copper Base, Aluminium base, Zinc base, Lead base and Nickel Base in both wet as well as instrumental techniques.",
    ],
    tests: [
      {
        name: "Optical Emission Spectrometer (OES)",
        tests: [
          "Alloy Steel",
          "Stainless Steel",
          "Copper Base Alloys",
          "Aluminium Base Alloys etc.",
        ],
        otherInfo: "",
      },
      {
        name: "Atomic Absorption Spectrometer (AAS)",
        tests: [
          "Alloy Steel",
          "Stainless Steel",
          "Copper Base Alloys",
          "Aluminium Base Alloys etc.",
        ],
        otherInfo: ["Hollow Cathode Lamps:", "Cr", "Ni", "Mo", "Cu etc."],
      },
      {
        name: "Carbon - Sulfer Determinator (LECO)",
        tests: ["Testing of C & Sulfur"],
        otherInfo: "",
      },
      {
        name: "Wet Analysis and IGC Testing",
        tests: [
          "Determination of Nitrogen",
          "Gravimetric methods for different elements",
          "Volumetric methods for different elements",
          "IGC practices as per A262 ie Practice ‘A’, ‘B’, ‘C’, ‘E’, ‘F’",
          "Polymer Identification by solvent test, melting point, flammability etc.",
          "Aging Ovens for rubber etc.",
        ],
        otherInfo: "",
      },
      {
        name: "Salt Spray Test",
        tests: [
          "As per ASTM B117 as well as ISO 9927 ",
          "methods: Coating thickness measurements by stripping as well as instrumental techniques.",
        ],
        otherInfo: "",
      },
    ],
  },
  Mechanical: {
    tests: [
      {
        name: "Mechanical",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Atomic Absorption Spectrometer (AAS)",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Carbon - Sulfer Determinator (LECO)",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Wet Analysis and IGC Testing",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Salt Spray Test",
        tests: [],
        otherInfo: "",
      },
    ],
  },
  Metallurgical: {
    tests: [
      {
        name: "Metallurgical",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Atomic Absorption Spectrometer (AAS)",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Carbon - Sulfer Determinator (LECO)",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Wet Analysis and IGC Testing",
        tests: [],
        otherInfo: "",
      },
      {
        name: "Salt Spray Test",
        tests: [],
        otherInfo: "",
      },
    ],
  },
};
export default departments;
