
### Problem:

Unfortunately, our database has been inaccessible and our analysts need some urgent data to build reports for our next company meeting. All we have is a file with some relevant data about orders and crazy requirements to pretty-fy its contents. In simpler terms: convert the input file to the desired output.

Requirements:

1. Input file contains order data. Each order can contain up to 4 items. Input file has 1 line per order.

Example of input data:


Order_id:date
User_id
Item_price_1
Item_price_2
Item_price_3
Item_price_4
Start_page_url
54374:20150501
123
10
20
0
0
http://www.yahoo.com/



Example of output data:

Order_id
Order_date
User_id
Avg_Item_price
Start_page_url
Error_msg
54374
2015-05-01
123
15

Invalid URL


2. Output file should contain same number of rows as input file.
3. If your program is unable to parse certain columns or rows from the input file, appropriate error message should appear in the output file.  

 4. Only valid URLs should appear in the output file. URL is considered valid if it starts with “http://www.insacart.com”
5. A readme file with instructions on how to run your script




## Solution

## Requirements
 - Need to install node js application on the machine(fairly simple with terminal)

## Application run:
 1. go to the director where script.js application saved from terminal.
   run ```$ node script.js```
 2. See result in output folder.
  /scripting-challenge/data/output/scripting_challenge_output_file.txt file
