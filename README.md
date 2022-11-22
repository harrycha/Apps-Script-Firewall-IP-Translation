# Apps-Script-Firewall-IP-Translation

The objective of this script was to scrape data from many Googlesheets files and push it on to a Googlesheet to make a database. This was built internally for the SIOPS team at TELUS inorder to get IPs and their corosponding Firwall names.

An example of how the data in each sheet is formatted starting at column C:

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

How the end result turns out:

| IP             |      Firewall      | Fireflow Name | Fireflow Owner |
|----------------|:------------------:|--------------:|----------------|
| 75.121.126.185 | Managment Firewall |        122463 | Harry          | 
| 75.153.125.242 |   Edge Firewall    |        122463 | Harry          |
| ...            |        ...         |           ... | ...            |
