const image = document.getElementById('image'); // The image we want to classify
const result = document.getElementById('result'); // The result tag in the HTML

// Initialize the Image Classifier method with MobileNet
ml5.imageClassifier('MobileNet')
  .then(classifier => classifier.classify(image))
  .then(results => {
    result.innerText = results[0].label;
    
  });
