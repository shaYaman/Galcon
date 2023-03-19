# Galcon test

כתוב בדיקה אשר עוברת על לוח השידורים בטלויזיה ומוודאת כי 'זהו זה' משודרת ביום חמישי ב21:15 בערוץ הראשון.
https://www.kan.org.il/tv-guide/#stations_kan11  
את הבדיקה יש לכתוב ב
BDD  
ולאחר מכן ליישם ב
SELENIUM
 בכל שפת תכנות.



### BDD
**Feature**: verify tv program is on thursday at 21:15

**Scenario**: assert is true
program appear on tv guide on comming thursday at 21:15

**Scenario**: assert is false
- channel called "kan11" doeant appear on tv guide
- program doesnt appear on thursday
- program time stamp is not 21:15
