export const currentConditions = [
  JSON.parse(
    `{
    "LocalObservationDateTime": "2022-02-24T22:42:00+00:00",
    "EpochTime": 1645742520,
    "WeatherText": "Clear",
    "WeatherIcon": 33,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": false,
    "Temperature": {
      "Metric": {
        "Value": 5.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 42,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "RealFeelTemperature": {
      "Metric": {
        "Value": -0.8,
        "Unit": "C",
        "UnitType": 17,
        "Phrase": "Cold"
      },
      "Imperial": {
        "Value": 30,
        "Unit": "F",
        "UnitType": 18,
        "Phrase": "Cold"
      }
    },
    "RealFeelTemperatureShade": {
      "Metric": {
        "Value": -0.8,
        "Unit": "C",
        "UnitType": 17,
        "Phrase": "Cold"
      },
      "Imperial": {
        "Value": 30,
        "Unit": "F",
        "UnitType": 18,
        "Phrase": "Cold"
      }
    },
    "RelativeHumidity": 64,
    "IndoorRelativeHumidity": 40,
    "DewPoint": {
      "Metric": {
        "Value": -0.5,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 31,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Wind": {
      "Direction": {
        "Degrees": 293,
        "Localized": "WNW",
        "English": "WNW"
      },
      "Speed": {
        "Metric": {
          "Value": 27.5,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 17.1,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "WindGust": {
      "Speed": {
        "Metric": {
          "Value": 38.4,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 23.9,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "UVIndex": 0,
    "UVIndexText": "Low",
    "Visibility": {
      "Metric": {
        "Value": 16.1,
        "Unit": "km",
        "UnitType": 6
      },
      "Imperial": {
        "Value": 10,
        "Unit": "mi",
        "UnitType": 2
      }
    },
    "ObstructionsToVisibility": "",
    "CloudCover": 10,
    "Ceiling": {
      "Metric": {
        "Value": 10180,
        "Unit": "m",
        "UnitType": 5
      },
      "Imperial": {
        "Value": 33400,
        "Unit": "ft",
        "UnitType": 0
      }
    },
    "Pressure": {
      "Metric": {
        "Value": 1022,
        "Unit": "mb",
        "UnitType": 14
      },
      "Imperial": {
        "Value": 30.18,
        "Unit": "inHg",
        "UnitType": 12
      }
    },
    "PressureTendency": {
      "LocalizedText": "Steady",
      "Code": "S"
    },
    "Past24HourTemperatureDeparture": {
      "Metric": {
        "Value": -3.3,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": -6,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "ApparentTemperature": {
      "Metric": {
        "Value": 6.7,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 44,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WindChillTemperature": {
      "Metric": {
        "Value": 1.1,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 34,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WetBulbTemperature": {
      "Metric": {
        "Value": 3.1,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 38,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Precip1hr": {
      "Metric": {
        "Value": 0,
        "Unit": "mm",
        "UnitType": 3
      },
      "Imperial": {
        "Value": 0,
        "Unit": "in",
        "UnitType": 1
      }
    },
    "PrecipitationSummary": {
      "Precipitation": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PastHour": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past3Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past6Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past9Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past12Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past18Hours": {
        "Metric": {
          "Value": 0.9,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0.03,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past24Hours": {
        "Metric": {
          "Value": 3.3,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0.13,
          "Unit": "in",
          "UnitType": 1
        }
      }
    },
    "TemperatureSummary": {
      "Past6HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 5.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 42,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 7.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 45,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past12HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 5.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 42,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 7.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 45,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past24HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 4.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 9,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 48,
            "Unit": "F",
            "UnitType": 18
          }
        }
      }
    },
    "MobileLink": "http://www.accuweather.com/en/gb/truro/tr1-1/current-weather/322307?lang=en-us",
    "Link": "http://www.accuweather.com/en/gb/truro/tr1-1/current-weather/322307?lang=en-us"
  }`)];
