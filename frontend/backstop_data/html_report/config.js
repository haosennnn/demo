report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Blog-app_Homepage_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20240201-173513\\backstop_default_Blog-app_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Blog-app_Homepage_0_document_0_phone.png",
        "label": "Blog-app Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:5173/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -7,
            "height": -28
          },
          "rawMisMatchPercentage": 11.47265465949355,
          "misMatchPercentage": "11.47",
          "analysisTime": 33
        },
        "diffImage": "..\\bitmaps_test\\20240201-173513\\failed_diff_backstop_default_Blog-app_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Blog-app_Homepage_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20240201-173513\\backstop_default_Blog-app_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Blog-app_Homepage_0_document_1_tablet.png",
        "label": "Blog-app Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:5173/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.05011307565789474,
          "misMatchPercentage": "0.05",
          "analysisTime": 70
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Blog-app_Homepage_0_document_2_desktop.png",
        "test": "..\\bitmaps_test\\20240201-173513\\backstop_default_Blog-app_Homepage_0_document_2_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Blog-app_Homepage_0_document_2_desktop.png",
        "label": "Blog-app Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:5173/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.0356359649122807,
          "misMatchPercentage": "0.04",
          "analysisTime": 78
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});