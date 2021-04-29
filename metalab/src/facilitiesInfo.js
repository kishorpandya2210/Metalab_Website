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
    info: [
      "Mechanical Department is supported by not only calibrated and adequate equipments but also good supporting instruments.",
      "Laboratory is equipped with Universal Testing Machine as well as Tensometer and also has Impact Tester, Rockwell cum Brinell & Vickers Hardness Tester and Cupping Machine.",
      "Laboratory also houses calibrated digital vernier callipers & digital micrometer gauges to reduce the testing errors. Extensometer is also available for determining proof stress at any given strain point.",
      "Laboratory has an exhaustive list reference material for Hardness blocks procured from Westport & Instron USA for its traceability to NIST and also Impact machine is calibrated using Certified reference Material (as per ISO 148-2 indirect verification).",
      "Latest relevant Test methods are maintained by lab.",
    ],

    tests: [
      {
        name: "Tenisle Test",
        tests: [
          "UTS",
          "YS",
          "0.2% Proof Test",
          "Reduction",
          "Elongation",
          "Flaring Test",
          "Flattening Test",
          "Bend Test",
        ],
        otherInfo: "",
      },
      {
        name: "Micro Tensile Test",
        tests: [
          "UTS",
          "YS",
          "Reduction",
          "Elongation",
          "Rubber Testing",
          "Plastic Testing",
        ],
        otherInfo: "",
      },
      {
        name: "Impact Test",
        tests: [
          "Charpy at various temperatures including sub zero",
          "IZOD Test at ambient Temperature",
        ],
        otherInfo: "",
      },
      {
        name: "Hardness Test",
        tests: [
          "Rockwell Scale : Scale A, B, C, Superficial etc. and BHN test on load 2.5/ 187.5kg",
          "Vickers Hardness: load 5, 10, 20, 30, 50kg",
          "Micro Hardness: load 10, 25, 50, 100, 300, 500, 1000gf.",
        ],
        otherInfo: "",
      },
      {
        name: "Cupping Test",
        tests: ["Depth of Cup Ball dia 20mm"],
        otherInfo: "",
      },
    ],
  },
  Metallurgical: {
    info: [
      "Metallurgical Department is supported by not only calibrated and adequate equipments but also good measurement techniques.",
      "Laboratory is equipped with Metallurgical Microscope attached with camera having a facility of not only picture grabbing but also quantitative measurements to make the results more accurate. The Lab also has Micro Hardness Tester for lower loads impression and also profile projector for dimensional measurements.",
      "Laboratory is also equipped with good in house sample preparation facility for preparation of micro specimens as well as macro specimens. ",
      "Laboratory has metallurgical software for phase evaluation and reporting for quantitive values which will be more precise than the manual measurements.",
      "Laboratory also has required reference blocks for its microhardness tester and the same are traceable to National/ International Standards.",
      "Latest relevant Test methods are maintained by lab.",
    ],
    tests: [
      {
        name: "Microsturture Tests",
        tests: [
          "Microstructure sample preparation, evaluation and Interpretation for all the base material.",
          "Software available for measurements of phase: Dimensional and geometrical measurements. ",
        ],
        otherInfo: "",
      },
      {
        name: "Macrostructue Tests",
        tests: [
          "Macrostructure sample preparation, evaluation and Interpretation as per E340, E381 as well as weld samples.",
          "Software available for measurements of weld parameters: Dimensional and geometrical measurements.",
        ],
        otherInfo: "",
      },
      {
        name: "Other Metallography Tests",
        tests: [
          "Case Depth measurement, Visual as well as traverse",
          "Depth of decarburisation",
          "Inclusion Rating etc",
        ],
        otherInfo: "",
      },
    ],
  },
};
export default departments;
