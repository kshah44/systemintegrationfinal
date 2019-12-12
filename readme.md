# Image analysis using Azure Computer Vision API
Developers can use this api for to access advanced algorithms for processing images and returning information. By uploading an image or specifying an image URL, Microsoft Computer Vision algorithms can analyze visual content in different ways based on inputs and user choices. 

I have created this api as an Bridge Between miscrosoft computer vision api and users willing to try out this api without getting involved in complexities of setting up an account, getting credits etc. 

---

- ## There are 5 endpoints for using these API 
    - ***Describe Image***: We can use this to get breif description of the image, In this case we can either upload the image or we can give the url of the image.
        - **URL**- [174.138.55.228:3030/describe]
        - **Method** - *Post*
        - **Parameter** - {
            photo: {
                type: text(url of the image) or
                type: image
            }
        }
        - **Sample Response** 
                ```
                    {
                    "tags": [
                        "outdoor",
                        "track",
                        "train",
                        "scene",
                        "road",
                        "highway",
                        "city",
                        "yard",
                        "lot",
                        "orange",
                        "large",
                        "sun",
                        "group",
                        "traffic",
                        "snow",
                        "parked",
                        "riding"
                    ],
                    "captions": [
                        {
                            "text": "a large long train on a highway",
                            "confidence": 0.9017932196292364
                        }
                    ],
                    "requestId": "dfb7750f-40f2-4e65-a1db-3ca63d43b626",
                    "metadata": {
                        "width": 4621,
                        "height": 3070,
                        "format": "Jpeg"
                    }
                }
            
                ```
            

        
    - ***Analyze Image***: We can use this to get imformation such as color, tags, faces, categries, brands, objects etc. This also accepts either url of the image or uploaded image. 
        - **URL**- [174.138.55.228:3030/analyze]
        - **Method** - *Post*
        - **Parameter** - {
            photo: {
                type: text(url of the image) or
                type: image
            }
        }
        - **Sample Response** 
            ```
                {
                    "adult": {
                        "isAdultContent": false,
                        "isRacyContent": false,
                        "isGoryContent": false,
                        "adultScore": 0.1461053043603897,
                        "racyScore": 0.17830169200897217,
                        "goreScore": 0.015333608724176884
                    },
                    "color": {
                        "dominantColorForeground": "White",
                        "dominantColorBackground": "Grey",
                        "dominantColors": [
                            "Brown",
                            "Grey",
                            "White"
                        ],
                        "accentColor": "B0581B",
                        "isBWImg": false,
                        "isBwImg": false
                    },
                    "tags": [
                        {
                            "name": "outdoor",
                            "confidence": 0.9996449947357178
                        },
                        {
                            "name": "sky",
                            "confidence": 0.9995132684707642
                        },
                        {
                            "name": "track",
                            "confidence": 0.9964684844017029,
                            "hint": "sport"
                        },
                        {
                            "name": "train",
                            "confidence": 0.9917099475860596
                        },
                        {
                            "name": "scene",
                            "confidence": 0.9794020652770996
                        },
                        {
                            "name": "road",
                            "confidence": 0.9604817628860474
                        },
                        {
                            "name": "way",
                            "confidence": 0.9570380449295044
                        },
                        {
                            "name": "cloud",
                            "confidence": 0.8585542440414429
                        },
                        {
                            "name": "vehicle",
                            "confidence": 0.6533592939376831
                        },
                        {
                            "name": "highway",
                            "confidence": 0.6174718141555786
                        },
                        {
                            "name": "city",
                            "confidence": 0.5331584811210632
                        },
                        {
                            "name": "railroad",
                            "confidence": 0.45342403650283813
                        },
                        {
                            "name": "long",
                            "confidence": 0.416542649269104
                        },
                        {
                            "name": "sunset",
                            "confidence": 0.4148936867713928
                        },
                        {
                            "name": "traveling",
                            "confidence": 0.36197715997695923
                        },
                        {
                            "name": "several",
                            "confidence": 0.25003179907798767
                        }
                    ],
                    "description": {
                        "tags": [
                            "outdoor",
                            "track",
                            "train",
                            "scene",
                            "road",
                            "highway",
                            "city",
                            "railroad",
                            "going",
                            "long",
                            "sunset",
                            "traveling",
                            "many",
                            "coming",
                            "filled",
                            "several",
                            "yard",
                            "lot",
                            "orange",
                            "large",
                            "sun",
                            "group",
                            "traffic",
                            "snow",
                            "parked",
                            "riding"
                        ],
                        "captions": [
                            {
                                "text": "a large long train on a highway",
                                "confidence": 0.9017932196292364
                            }
                        ]
                    },
                    "faces": [],
                    "objects": [
                        {
                            "rectangle": {
                                "x": 3950,
                                "y": 1873,
                                "w": 659,
                                "h": 284
                            },
                            "object": "train",
                            "confidence": 0.573,
                            "parent": {
                                "object": "Land vehicle",
                                "confidence": 0.578,
                                "parent": {
                                    "object": "Vehicle",
                                    "confidence": 0.579
                                }
                            }
                        },
                        {
                            "rectangle": {
                                "x": 1261,
                                "y": 1850,
                                "w": 1174,
                                "h": 667
                            },
                            "object": "train",
                            "confidence": 0.649,
                            "parent": {
                                "object": "Land vehicle",
                                "confidence": 0.656,
                                "parent": {
                                    "object": "Vehicle",
                                    "confidence": 0.657
                                }
                            }
                        }
                    ],
                    "brands": [],
                    "requestId": "77f88219-4c3b-478f-8eb7-e43b6d8ee678",
                    "metadata": {
                        "width": 4621,
                        "height": 3070,
                        "format": "Jpeg"
                    }
                }
         
         ```
    - ***Analyze Image Categories***: This is a smaller version of analyze images which returns information about image categories. 
        - **URL**- [174.138.55.228:3030/analyzecategories]
        - **Method** - *Post*
        - **Parameter** - {
            photo: {
                type: text(url of the image) or
                type: image
            }
        }
        - **Sample Response** : 
            ```
            {
                "categories": [
                    {
                        "name": "abstract_",
                        "score": 0.0078125
                    },
                    {
                        "name": "outdoor_",
                        "score": 0.0078125
                    }
                ],
                "requestId": "700660c9-9115-4e04-8d10-11ea6cc7c647",
                "metadata": {
                    "width": 4621,
                    "height": 3070,
                    "format": "Jpeg"
                }
            }
            ```
    - ***Analyze Image Tags***: This is a smaller version of analyze images which returns information about image tags. 
        - **URL**- [174.138.55.228:3030/analyzetags]
        - **Method** - *Post*
        - **Parameter** - {
            photo: {
                type: text(url of the image) or
                type: image
            }
        }
        - **Sample Response** : 
            ```
            {
                "tags": [
                    {
                        "name": "outdoor",
                        "confidence": 0.9996449947357178
                    },
                    {
                        "name": "sky",
                        "confidence": 0.9995132684707642
                    },
                    {
                        "name": "track",
                        "confidence": 0.9964684844017029,
                        "hint": "sport"
                    },
                    {
                        "name": "train",
                        "confidence": 0.9917099475860596
                    },
                    {
                        "name": "scene",
                        "confidence": 0.9794020652770996
                    },
                    {
                        "name": "road",
                        "confidence": 0.9604817628860474
                    },
                    {
                        "name": "way",
                        "confidence": 0.9570380449295044
                    },
                    {
                        "name": "cloud",
                        "confidence": 0.8585542440414429
                    },
                    {
                        "name": "vehicle",
                        "confidence": 0.6533592939376831
                    },
                    {
                        "name": "highway",
                        "confidence": 0.6174718141555786
                    },
                    {
                        "name": "city",
                        "confidence": 0.5331584811210632
                    },
                    {
                        "name": "railroad",
                        "confidence": 0.45342403650283813
                    },
                    {
                        "name": "long",
                        "confidence": 0.416542649269104
                    },
                    {
                        "name": "sunset",
                        "confidence": 0.4148936867713928
                    },
                    {
                        "name": "traveling",
                        "confidence": 0.36197715997695923
                    },
                    {
                        "name": "several",
                        "confidence": 0.25003179907798767
                    }
                ],
                "requestId": "e6c890de-6a0d-473e-a482-a05ad66132ff",
                "metadata": {
                    "width": 4621,
                    "height": 3070,
                    "format": "Jpeg"
                }
            }
            ```
    ***Analyze Image Objects***: This is a smaller version of analyze images which returns information about Objects in image. 
        - **URL**- [174.138.55.228:3030/analyzeobjects]
        - **Method** - *Post*
        - **Parameter** - {
            photo: {
                type: text(url of the image) or
                type: image
            }
        }
        - **Sample Response** : 
            ```
            {
                "objects": [
                    {
                        "rectangle": {
                            "x": 3950,
                            "y": 1873,
                            "w": 659,
                            "h": 284
                        },
                        "object": "train",
                        "confidence": 0.573,
                        "parent": {
                            "object": "Land vehicle",
                            "confidence": 0.578,
                            "parent": {
                                "object": "Vehicle",
                                "confidence": 0.579
                            }
                        }
                    },
                    {
                        "rectangle": {
                            "x": 1261,
                            "y": 1850,
                            "w": 1174,
                            "h": 667
                        },
                        "object": "train",
                        "confidence": 0.649,
                        "parent": {
                            "object": "Land vehicle",
                            "confidence": 0.656,
                            "parent": {
                                "object": "Vehicle",
                                "confidence": 0.657
                            }
                        }
                    }
                ],
                "requestId": "b7d5feae-0960-43a2-9113-bee1dc602183",
                "metadata": {
                    "width": 4621,
                    "height": 3070,
                    "format": "Jpeg"
                }
            }
            ```