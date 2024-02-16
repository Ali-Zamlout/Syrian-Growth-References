# Syrian National Growth References WebApp
A user-friendly web application for estimating the standard deviation and percentile of a child's anthropometrics (height, weight, and BMI) according to the Syrian National Growth References. This tool provides valuable insights for healthcare professionals and parents to monitor child growth and development.  

Visit the webapp for free at the following url: [https://ali-zamlout.github.io/Syrian-Growth-References](https://ali-zamlout.github.io/Syrian-Growth-References)  

  
### Background & Methodologies
The LMS method (Lambda-Mu-Sigma) was developed by Cole and Green to create centile curves for a response variable (e.g. height) against a single explanatory variable (e.g. age), assuming that the response variable follows Box-Cox Cole and Green distribution, and a truncated standard normal distribution after Box-Cox power transformation. Rigby and Stasinopoulos generalized the LMS method to accommodate for kurtosis by introducing the Box-Cox Power Exponential and Box-Cox T distributions within the frame of GAMLSS. The Syrian National Growth References were established using the _Box-Cox T_ distribution for height-for-age and the _Box-Cox Power Exponential_ distribution for weight-for-age and BMI-for-age.  

  
### Features
- Calculate percentile and SD score corresponding to height, weight, and BMI anthropometric measurments.
- Visualize the child's anthropometries on interactive growth charts.
- Easy implementation of growth standards with automatic calculation and classification.

  
### How to Use
1. Enter the child's age, gender, height, and weight.
2. Click on the "Calculate" button to obtain the corresponding percentile and SD score.
3. Click on the headings to view the interactive charts for height-for-age, weight-for-age, and BMI-for-age.

  
### References
- Cole TJ, Green PJ. Smoothing reference centile curves: the LMS method and penalized likelihood. Stat Med. 1992;11(10):1305–19.
- Rigby RA, Stasinopoulos DMJSM. Using the Box-Cox t distribution in GAMLSS to model skewness and kurtosis. 2006;6(3):209–29.
- Rigby RA, Stasinopoulos DM. Smooth centile curves for skew and kurtotic data modelled using the Box-Cox power exponential distribution. Stat Med. 2004;23(19):3053–76.

  


  
  
Feel free to contribute or provide feedback!
