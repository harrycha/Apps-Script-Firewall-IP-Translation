## Apps-Script-Firewall-IP-Translation

The objective of this script was to scrape data from many Googlesheets files and push it on to a singular sheet and make a database. Initially built for the SIOPS team at TELUS to get corresponding Firewall names for IP addresses to implement policies on.

An example of how the data in each sheet is formatted starting at column C in the sheet:

| Source IP        | Source Firewall           | Flow Number |   Destination Firewall   |   Destination IP  |
| ------------- |:-------------:|------------:|-----|-----|
| 75.121.126.185     | Managment Firewall |           1 |    75.153.125.242 |  Edge Firewall   |

Example of how the folder structure should look like in the shared drive:

```
Shared Drive
│   README.md
│   Firewall IP Translation Database Sheet.sh
│
└───Fireflow Sheets
│   │ 
│   └───Harry's Fireflows
│   │    │   fireflow122463.sh
│   │    │   fireflow143278.sh
│   │    │   ...
│   │───Jim's Fireflows
│   │    │   fireflow118213.sh
│   │    │   fireflow113536.sh
│   │    │   ...
```
*Note **sh** stands for **GoogleSheet**

How the end result turns out:

| IP             |      Firewall      | Fireflow Name | Fireflow Owner |
|----------------|:------------------:|--------------:|----------------|
| 75.121.126.185 | Managment Firewall |        122463 | Harry          | 
| 75.153.125.242 |   Edge Firewall    |        122463 | Harry          |
| ...            |        ...         |           ... | ...            |

# How to use:

Paste the JavaScript code on the sheet you'd like to create the database. 

Change any variables to fit your top level folder. 

Create a trigger for an automated execution and enjoy!





MIT License

Copyright (c) 2022 Harry Chauhan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
