# Image analysis using Azure Computer Vision API
Developers can use this api for to access advanced algorithms for processing images and returning information. By uploading an image or specifying an image URL, Microsoft Computer Vision algorithms can analyze visual content in different ways based on inputs and user choices. 

I have created this api as an Bridge Between miscrosoft computer vision api and users willing to try out this api without getting involved in complexities of setting up an account, getting credits etc. 

---

- ## There are 5 endpoints for using these API 
    - ***Describe Image***: We can use this to get breif description of the image, In this case we can either upload the image or we can give the url of the image.
        - **URL**- 174.138.55.228:3030/describe
        - **Method** - *Post*
        - **Parameter** - {
            photo: {
                type: text(url of the image) or
                type: image
            }
        }
        - ***Sample Response* 
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
                    ],
                    "requestId": "dfb7750f-40f2-4e65-a1db-3ca63d43b626",
                    "metadata": {
                        "width": 4621,
                        "height": 3070,
                        "format": "Jpeg"
                    }
                }
         
         ```