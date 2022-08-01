var sketch = {
  "metadata": {
    "width": 847,
    "height": 723,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1070",
    "wsp-build-stamp": "8126303e6615/20200924134425",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L06 Rational Number Behaviour Explorer.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Comic Sans MS\", sans-serif",
      "\"Papyrus\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -86,
          "left": -44,
          "bottom": 637,
          "right": 803
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Straights": {
            "color": "rgb(192,133,74)"
          },
          "Curves": {
            "color": "rgb(192,133,74)"
          },
          "Interior": {
            "color": "rgb(143,251,140)"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "green"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "color": "blue"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 24
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 631,
              "y": 32
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "10",
          "label": "numerator",
          "style": {
            "font-size": 36,
            "color": "navy",
            "precision": 0,
            "nameOrigin": "noVisibleName"
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 859,
              "y": -177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "3": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 867,
              "y": -130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "label": "t[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 862,
              "y": -81
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "t[3]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 724,
              "y": 209
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.7 cm",
          "label": "dilation factor",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 220,
              "y": 76
            }
          },
          "label": "D",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 883,
              "y": -198
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "label": "t[0]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 363,
              "y": 75
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 632,
              "y": 92
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "denominator",
          "style": {
            "font-size": 36,
            "color": "green",
            "precision": 0,
            "nameOrigin": "noVisibleName"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 728,
              "y": 48
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "360\u00b0/@0",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 732,
              "y": 94
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1",
            "1": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 731,
              "y": 118
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 927,
              "y": -130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[1]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "13",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 989,
              "y": -130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 928,
              "y": -177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[0]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 992,
              "y": -177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "3"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1156,
              "y": -133
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "17",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1215,
              "y": -133
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "3"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 922,
              "y": -81
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "19",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 984,
              "y": -82
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1156,
              "y": -83
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[3]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "21",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1214,
              "y": -82
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1178,
              "y": -181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[1]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "5",
            "1": "23"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1240,
              "y": -183
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 74,
              "y": 79
            }
          },
          "label": "B",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "25",
            "radius": "16"
          },
          "constraint": "CircleByRadius"
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "25",
            "radius": "24"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "28": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "27"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(255,136,136)",
            "opacity": 0.7499961853027344,
            "layerOrder": 0
          }
        },
        "29": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "26"
          },
          "value": 0.0007158023259501794,
          "constraint": "PointOnPath",
          "label": "C",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "30": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "29"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29",
            "center": "25",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "31"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "33": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "30",
            "1": "31",
            "2": "32",
            "preimage0": "29",
            "map0image0": "31",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "34": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "30",
            "map": "33"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "35": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "31",
            "map": "33"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "33"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "37": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "6",
            "radius": "14"
          },
          "constraint": "CircleByRadius"
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "37"
          },
          "value": 0.0010760358235453289,
          "constraint": "PointOnPath",
          "label": "E",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "39": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "6"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "center": "6",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "40"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "42": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "preimage0": "38",
            "map0image0": "40",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "43": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "39",
            "map": "42"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "44": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "42"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "41",
            "map": "42"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "46": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "6",
            "radius": "18"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "47": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "46"
          },
          "constraint": "CircleInterior",
          "style": {
            "opacity": 0.7499961853027344,
            "layerOrder": 1
          }
        },
        "48": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "8",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "49": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "48"
          },
          "value": 0.0007332035761297167,
          "constraint": "PointOnPath",
          "label": "G",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "49"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "51": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "49",
            "center": "8",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "52": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "51",
            "p1": "8"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "53": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "50",
            "1": "51",
            "2": "52",
            "preimage0": "49",
            "map0image0": "51",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "54": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "50",
            "map": "53"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "55": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "51",
            "map": "53"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "56": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "52",
            "map": "53"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "57": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "8",
            "radius": "22"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "58": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "57"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(250,253,119)",
            "opacity": 0.7499961853027344,
            "layerOrder": 2
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 927,
              "y": -159
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "m[1]>0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 996,
              "y": -158
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[1]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "59",
            "1": "60"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1052,
              "y": -155
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>0)^(m[1]<t[1])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1167,
              "y": -167
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29",
            "center": "25",
            "angle": "62"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "64": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "26",
            "p0": "29",
            "p1": "63"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "65": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "64"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(255,136,136)",
            "opacity": 0.7499961853027344,
            "layerOrder": 3
          }
        },
        "66": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "3"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 923,
              "y": -106
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "67": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "13",
            "1": "66"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 988,
              "y": -106
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[1])^(m[1]<t[2])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "68": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "67"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1103,
              "y": -117
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-1)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "69": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "center": "6",
            "angle": "68"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "70": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "37",
            "p0": "38",
            "p1": "69"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "71": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "70"
          },
          "constraint": "ArcSector",
          "style": {
            "opacity": 0.7499961853027344,
            "layerOrder": 4
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 924,
              "y": -53
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[3]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "73": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "19",
            "1": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 983,
              "y": -54
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[2])^(m[1]<t[3])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "74": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "73"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1104,
              "y": -63
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "49",
            "center": "8",
            "angle": "74"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "76": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "48",
            "p0": "49",
            "p1": "75"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "77": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "76"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(250,253,119)",
            "opacity": 0.7499961853027344,
            "layerOrder": 5
          }
        },
        "78": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 861,
              "y": -30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "label": "t[4]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 495,
              "y": 516
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "style": {
            "hidden": true,
            "font-size": 30,
            "color": "black",
            "precision": 0,
            "nameOrigin": "noVisibleName"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 439,
              "y": 511
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "style": {
            "hidden": true,
            "font-size": 30,
            "color": "black",
            "precision": 0,
            "nameOrigin": "noVisibleName"
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 619,
              "y": 90
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "82": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 681,
              "y": 90
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "81",
            "p1": "82"
          },
          "constraint": "Segment",
          "style": {
            "color": "black"
          }
        },
        "84": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 507,
              "y": 75
            }
          },
          "label": "H",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 922,
              "y": -29
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[3]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "85",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 984,
              "y": -25
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "84",
            "radius": "86"
          },
          "constraint": "CircleByRadius"
        },
        "88": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "87"
          },
          "value": 0.00041068143485242776,
          "constraint": "PointOnPath",
          "label": "I",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "89": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "84",
            "p1": "88"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "90": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "88",
            "center": "84",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "91": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1171,
              "y": -20
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[4]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "91",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1244,
              "y": -21
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "93": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "84",
            "radius": "92"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "94": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "93"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(164,255,255)",
            "opacity": 0.7499961853027344,
            "layerOrder": 6
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 944,
              "y": -4
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[4]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "85",
            "1": "95"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1007,
              "y": -6
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[3])^(m[1]<t[4])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "96"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1155,
              "y": -1
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-3)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "98": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "88",
            "center": "84",
            "angle": "97"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "99": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "87",
            "p0": "88",
            "p1": "98"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "100": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "99"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(164,255,255)",
            "opacity": 0.7499961853027344,
            "layerOrder": 7
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 854,
              "y": 31
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "t[5]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "102": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 75,
              "y": 225
            }
          },
          "label": "J",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "103": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 923,
              "y": 35
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[4]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "104": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "103",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 984,
              "y": 36
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "105": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "102",
            "radius": "104"
          },
          "constraint": "CircleByRadius"
        },
        "106": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "101"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1165,
              "y": 38
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[5]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "107": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "5",
            "1": "106"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1231,
              "y": 37
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "108": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "102",
            "radius": "107"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "109": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "108"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(255,198,140)",
            "opacity": 0.7499961853027344,
            "layerOrder": 8
          }
        },
        "110": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "101"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 923,
              "y": 60
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[5]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "111": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "103",
            "1": "110"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 984,
              "y": 60
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[4])^(m[1]<t[5])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "112": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "111"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1106,
              "y": 57
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-4)*360\u00b0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "113": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.9995228412766418,
          "constraint": "PointOnPath",
          "label": "K",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "114": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "102",
            "p1": "113"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "113",
            "center": "102",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "116": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "115",
            "p1": "102"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "117": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "114",
            "1": "115",
            "2": "116",
            "preimage0": "113",
            "map0image0": "115",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "118": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "114",
            "map": "117"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "119": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "115",
            "map": "117"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "120": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "116",
            "map": "117"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "113",
            "center": "102",
            "angle": "112"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "122": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "105",
            "p0": "113",
            "p1": "121"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "123": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "122"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(255,198,140)",
            "opacity": 0.7499961853027344,
            "layerOrder": 9
          }
        },
        "124": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 862,
              "y": 98
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "label": "t[6]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "125": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "101"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 917,
              "y": 100
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[5]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "126": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "5",
            "1": "125"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 987,
              "y": 101
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 219,
              "y": 226
            }
          },
          "label": "L",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "128": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "127",
            "radius": "126"
          },
          "constraint": "CircleByRadius"
        },
        "129": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "128"
          },
          "value": 0.0011601335490509736,
          "constraint": "PointOnPath",
          "label": "M",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "130": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "127",
            "p1": "129"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "131": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "129",
            "center": "127",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "132": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "131",
            "p1": "127"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "133": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "130",
            "1": "131",
            "2": "132",
            "preimage0": "129",
            "map0image0": "131",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "134": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "130",
            "map": "133"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "135": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "131",
            "map": "133"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "136": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "132",
            "map": "133"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "137": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "124"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 916,
              "y": 124
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[6]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "138": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "125",
            "1": "137"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 991,
              "y": 124
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[5])^(m[1]<t[6])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "139": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "124"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1160,
              "y": 100
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[6]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "140": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "139",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1227,
              "y": 101
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "141": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "127",
            "radius": "140"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "142": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "141"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(255,166,255)",
            "opacity": 0.7499961853027344,
            "layerOrder": 10
          }
        },
        "143": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "138"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1105,
              "y": 120
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-5)*360\u00b0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "129",
            "center": "127",
            "angle": "143"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "145": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "128",
            "p0": "129",
            "p1": "144"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "146": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "145"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(255,166,255)",
            "opacity": 0.7499961853027344,
            "layerOrder": 11
          }
        },
        "147": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 836,
              "y": 173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7",
          "label": "t[7]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "148": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "124"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 895,
              "y": 169
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[6]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "149": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "148",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 167
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "150": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 366,
              "y": 226
            }
          },
          "label": "N",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "151": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "150",
            "radius": "149"
          },
          "constraint": "CircleByRadius"
        },
        "152": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "151"
          },
          "value": 0.998930962551547,
          "constraint": "PointOnPath",
          "label": "O",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "153": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "150",
            "p1": "152"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "154": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "152",
            "center": "150",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "155": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "154",
            "p1": "150"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "156": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "153",
            "1": "154",
            "2": "155",
            "preimage0": "152",
            "map0image0": "154",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "157": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "153",
            "map": "156"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "158": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "154",
            "map": "156"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "159": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "155",
            "map": "156"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "160": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "147"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1125,
              "y": 169
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[7]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "161": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "160",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1193,
              "y": 168
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "162": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "150",
            "radius": "161"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "163": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "162"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(232,209,187)",
            "opacity": 0.7499961853027344,
            "layerOrder": 12
          }
        },
        "164": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "147"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 894,
              "y": 186
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[7]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "165": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "148",
            "1": "164"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 951,
              "y": 190
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[6])^(m[1]<t[7])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "166": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "165"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1073,
              "y": 186
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-6)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "167": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "152",
            "center": "150",
            "angle": "166"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "168": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "151",
            "p0": "152",
            "p1": "167"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "169": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "168"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(232,209,187)",
            "opacity": 0.7499961853027344,
            "layerOrder": 13
          }
        },
        "170": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 841,
              "y": 225
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "8",
          "label": "t[8]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "171": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "147"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 894,
              "y": 229
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[7]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "172": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "171",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 228
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "173": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 510,
              "y": 228
            }
          },
          "label": "P",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "174": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "173",
            "radius": "172"
          },
          "constraint": "CircleByRadius"
        },
        "175": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "174"
          },
          "value": 0.999507636528043,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "176": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "175",
            "p1": "173"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "177": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "175",
            "center": "173",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "178": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "177",
            "p1": "173"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "179": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "176",
            "1": "177",
            "2": "178",
            "preimage0": "175",
            "map0image0": "177",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "180": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "176",
            "map": "179"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "181": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "177",
            "map": "179"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "182": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "178",
            "map": "179"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "183": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "170"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1125,
              "y": 228
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[8]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "184": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "183",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1188,
              "y": 226
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "185": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "173",
            "radius": "184"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "186": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "185"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(202,202,202)",
            "opacity": 0.7499961853027344,
            "layerOrder": 14
          }
        },
        "187": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "170"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 896,
              "y": 250
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[8]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "188": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "171",
            "1": "187"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 958,
              "y": 254
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[7])^(m[1]<t[8])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "189": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "188"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1075,
              "y": 242
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-7)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "190": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "175",
            "center": "173",
            "angle": "189"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "191": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "174",
            "p0": "175",
            "p1": "190"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "192": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "191"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(202,202,202)",
            "opacity": 0.7499961853027344,
            "layerOrder": 15
          }
        },
        "193": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 836,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "9",
          "label": "t[9]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "194": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "170"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 896,
              "y": 270
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[8]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "195": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "194",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 955,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "196": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 69,
              "y": 374
            }
          },
          "label": "R",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "197": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "196",
            "radius": "195"
          },
          "constraint": "CircleByRadius"
        },
        "198": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "197"
          },
          "value": 0.0011380283453257477,
          "constraint": "PointOnPath",
          "label": "S",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "199": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "198",
            "center": "196",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "200": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "199",
            "p1": "196"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "201": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "196",
            "p1": "198"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "202": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "199",
            "1": "200",
            "2": "201",
            "preimage0": "198",
            "map0image0": "199",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "203": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "199",
            "map": "202"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "204": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "200",
            "map": "202"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "205": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "201",
            "map": "202"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "206": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "193"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1126,
              "y": 278
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[9]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "207": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "206",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1193,
              "y": 278
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "208": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "196",
            "radius": "207"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "209": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "208"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(168,168,255)",
            "opacity": 0.7499961853027344,
            "layerOrder": 16
          }
        },
        "210": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "193"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 896,
              "y": 291
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[9]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "211": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "194",
            "1": "210"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 957,
              "y": 291
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[8])^(m[1]<t[9])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "212": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "211"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1076,
              "y": 293
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-8)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "213": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "198",
            "center": "196",
            "angle": "212"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "214": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "197",
            "p0": "198",
            "p1": "213"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "215": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "214"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(168,168,255)",
            "opacity": 0.7499961853027344,
            "layerOrder": 17
          }
        },
        "216": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 834,
              "y": 320
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "10",
          "label": "t[10]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "217": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "193"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 898,
              "y": 327
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[9]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "218": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "217",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 954,
              "y": 329
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 219,
              "y": 376
            }
          },
          "label": "T",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "220": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "219",
            "radius": "218"
          },
          "constraint": "CircleByRadius"
        },
        "221": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "220"
          },
          "value": 0.9994851410156924,
          "constraint": "PointOnPath",
          "label": "U",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "221",
            "center": "219",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "223": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "222",
            "p1": "219"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "224": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "219",
            "p1": "221"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "225": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "222",
            "1": "223",
            "2": "224",
            "preimage0": "221",
            "map0image0": "222",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "226": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "222",
            "map": "225"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "227": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "223",
            "map": "225"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "228": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "224",
            "map": "225"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "229": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "216"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1129,
              "y": 330
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[10]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "230": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "229",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1200,
              "y": 328
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "231": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "219",
            "radius": "230"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "232": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "231"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(199,241,112)",
            "opacity": 0.7499961853027344,
            "layerOrder": 18
          }
        },
        "233": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "216"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 896,
              "y": 343
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[10]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "234": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "217",
            "1": "233"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 958,
              "y": 346
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[9])^(m[1]<t[10])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "235": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "234"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1083,
              "y": 342
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-9)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "221",
            "center": "219",
            "angle": "235"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "237": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "220",
            "p0": "221",
            "p1": "236"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "238": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "237"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(199,241,112)",
            "opacity": 0.7499961853027344,
            "layerOrder": 19
          }
        },
        "239": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 838,
              "y": 378
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "11",
          "label": "t[11]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "240": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "216"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 900,
              "y": 378
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[10]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "241": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "240",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 964,
              "y": 379
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "242": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 363,
              "y": 372
            }
          },
          "label": "V",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "243": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "242",
            "radius": "241"
          },
          "constraint": "CircleByRadius"
        },
        "244": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "243"
          },
          "value": 0.0009501546795477715,
          "constraint": "PointOnPath",
          "label": "W",
          "style": {
            "radius": 2
          }
        },
        "245": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "244",
            "center": "242",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "radius": 2
          }
        },
        "246": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "244",
            "p1": "242"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "247": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "242",
            "p1": "245"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "248": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "245",
            "1": "246",
            "2": "247",
            "preimage0": "244",
            "map0image0": "245",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "249": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "245",
            "map": "248"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "250": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "246",
            "map": "248"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "251": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "247",
            "map": "248"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "252": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "239"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1134,
              "y": 384
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[11]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "253": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "5",
            "1": "252"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1209,
              "y": 378
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "254": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "242",
            "radius": "253"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "255": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "254"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(207,138,253)",
            "opacity": 0.7499961853027344,
            "layerOrder": 20
          }
        },
        "256": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "239"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 906,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[11]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "257": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "240",
            "1": "256"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 978,
              "y": 400
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[10])^(m[1]<t[11])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "258": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "257"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1104,
              "y": 398
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-10)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "259": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "244",
            "center": "242",
            "angle": "258"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "radius": 2
          }
        },
        "260": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "243",
            "p0": "244",
            "p1": "259"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "261": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "260"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(207,138,253)",
            "opacity": 0.7499961853027344,
            "layerOrder": 21
          }
        },
        "262": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 828,
              "y": 430
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "12",
          "label": "t[12]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "263": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "239"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 897,
              "y": 428
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[11]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "264": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "263",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 959,
              "y": 429
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "265": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 508,
              "y": 373
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "266": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "265",
            "radius": "264"
          },
          "constraint": "CircleByRadius"
        },
        "267": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "266"
          },
          "value": 0.9989021943129532,
          "constraint": "PointOnPath",
          "label": "Y",
          "style": {
            "radius": 2
          }
        },
        "268": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "267",
            "center": "265",
            "angle": "10"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "radius": 2
          }
        },
        "269": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "268",
            "p1": "265"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "270": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "265",
            "p1": "267"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "271": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "268",
            "1": "269",
            "2": "270",
            "preimage0": "267",
            "map0image0": "268",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "272": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "268",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "273": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "269",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "274": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "270",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "275": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "262"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 433
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn((.5+sgn(@0-@1))))/2",
          "label": "m[1]>=t[12]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "276": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "275",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1206,
              "y": 434
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "277": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "265",
            "radius": "276"
          },
          "constraint": "CircleByRadius",
          "style": {
            "width": 1
          }
        },
        "278": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "277"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(253,226,134)",
            "opacity": 0.7499961853027344,
            "layerOrder": 22
          }
        },
        "279": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "262"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 896,
              "y": 452
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<t[12]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "280": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "263",
            "1": "279"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 451
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]>t[11])^(m[1]<t[12])",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "281": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "12",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1091,
              "y": 452
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-11)*@1*360\u00b0",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "282": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "267",
            "center": "265",
            "angle": "281"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "radius": 2
          }
        },
        "283": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "266",
            "p0": "267",
            "p1": "282"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "width": 1
          }
        },
        "284": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "283"
          },
          "constraint": "ArcSector",
          "style": {
            "color": "rgb(253,226,134)",
            "opacity": 0.7499961853027344,
            "layerOrder": 23
          }
        },
        "285": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1"
          },
          "geom": {
            "loc": {
              "x": 38,
              "y": 591
            }
          },
          "label": "+ num",
          "style": {
            "hidden": true,
            "color": "black"
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "+ num"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 0.20000000298023224,
              "repeat": false,
              "motionType": "forward",
              "lowerParamBound": 0,
              "upperParamBound": 200,
              "discrete": true
            }
          ]
        },
        "286": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1"
          },
          "geom": {
            "loc": {
              "x": 40,
              "y": 617
            }
          },
          "label": "- num",
          "style": {
            "hidden": true,
            "color": "black"
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "- num"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 0.20000000298023224,
              "repeat": false,
              "motionType": "backward",
              "lowerParamBound": 0,
              "upperParamBound": 200,
              "discrete": true
            }
          ]
        },
        "287": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "285"
          },
          "geom": {
            "loc": {
              "x": 620,
              "y": 1
            }
          },
          "label": "+",
          "style": {
            "color": "navy",
            "label": {
              "font-size": 14
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "+"
          ],
          "stopAfter": 0.1
        },
        "288": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "286"
          },
          "geom": {
            "loc": {
              "x": 648,
              "y": 1
            }
          },
          "label": "-",
          "style": {
            "color": "navy",
            "label": {
              "font-size": 14
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "-"
          ],
          "stopAfter": 0.1
        },
        "289": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "9"
          },
          "geom": {
            "loc": {
              "x": 50,
              "y": 701
            }
          },
          "label": "+ denom",
          "style": {
            "hidden": true,
            "color": "red"
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "+ denom"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 0.20000000298023224,
              "repeat": false,
              "motionType": "forward",
              "lowerParamBound": 1,
              "upperParamBound": 100,
              "discrete": true
            }
          ]
        },
        "290": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "289"
          },
          "geom": {
            "loc": {
              "x": 624,
              "y": 146
            }
          },
          "label": "+",
          "style": {
            "label": {
              "font-size": 14
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "+"
          ],
          "stopAfter": 0.1
        },
        "291": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "9"
          },
          "geom": {
            "loc": {
              "x": 52,
              "y": 730
            }
          },
          "label": "- denom",
          "style": {
            "hidden": true,
            "color": "red"
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "- denom"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 0.20000000298023224,
              "repeat": false,
              "motionType": "backward",
              "lowerParamBound": 1,
              "upperParamBound": 100,
              "discrete": true
            }
          ]
        },
        "292": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "291"
          },
          "geom": {
            "loc": {
              "x": 655,
              "y": 146
            }
          },
          "label": "-",
          "style": {
            "label": {
              "font-size": 14
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "-"
          ],
          "stopAfter": 0.1
        },
        "293": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "90",
            "p1": "84"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "294": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "89",
            "1": "90",
            "2": "98",
            "3": "99",
            "4": "100",
            "5": "293",
            "preimage0": "88",
            "map0image0": "90",
            "depth": "11"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false,
          "style": {
            "color": "black"
          }
        },
        "295": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "89",
            "map": "294"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "296": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "90",
            "map": "294"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "297": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "98",
            "map": "294"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "298": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "99",
            "map": "294"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "299": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "293",
            "map": "294"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "rgb(192,133,74)",
            "line-style": "solid",
            "width": 1
          }
        },
        "300": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -3,
              "y": -5
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "301": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -3,
              "y": 454
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "302": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "300",
            "p1": "301"
          },
          "constraint": "Segment"
        },
        "303": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 593,
              "y": 453
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "304": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "301",
            "p1": "303"
          },
          "constraint": "Segment"
        },
        "305": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 593,
              "y": -5
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "306": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "303",
            "p1": "305"
          },
          "constraint": "Segment"
        },
        "307": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "300",
            "p1": "305"
          },
          "constraint": "Segment"
        },
        "308": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "12",
            "1": "262"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 659,
              "y": 444
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]>t[12]",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "309": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 274,
              "y": 497
            }
          },
          "textMFS": "<VL<T'It cannot be'><T'displayed'><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "hidden": true,
            "font-size": 24
          }
        },
        "310": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "308"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 611,
              "y": 416
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "311": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 282,
              "y": 187
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "312": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "311"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "313": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "312",
            "center": "311",
            "measure": "310"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "radius": 2
          }
        },
        "314": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 291,
              "y": 337
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "315": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "314"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "316": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "315",
            "center": "314",
            "measure": "310"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "radius": 2
          }
        },
        "317": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 32,
              "y": 497
            }
          },
          "textMFS": "<VL<T'Rational number'><T'exceeds 12.'><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "hidden": true,
            "font-size": 24
          }
        },
        "318": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "313",
            "text": "317"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 36
          }
        },
        "319": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "316",
            "text": "309"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 36
          }
        },
        "320": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -6,
              "y": 485
            }
          },
          "textMFS": "<VL<T'Let\\'s explore the impact the numerator and denominator have'><T'on the value of a rational number. Use the  \\\"+\\\" and \\\"-\\\" buttons'><T'to change the value of the numerator and denominator.'><F1FxxFFFFFFFFx20xCx>>",
          "style": {
            "font-family": 1,
            "font-size": 22
          }
        },
        "321": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 107,
              "y": -55
            }
          },
          "textMFS": "<VL<T'Rational Number Behaviour Explorer'>>",
          "style": {
            "font-family": 1,
            "font-size": 22,
            "font-weight": "bold",
            "text-decoration": "underline"
          }
        }
      }
    }
  ]
};