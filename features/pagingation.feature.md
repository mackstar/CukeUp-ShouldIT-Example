> @pagination

# Pagination

+ IT should display next and previous links when available
+ IT should display the first page link as a number
+ IT should display the last page link as a number
+ IT should display a deliminator '...' when there are gaps between page numbers
+ IT should not have a link for the current page

## First 4 pages

![image](img/pagination-first.png)

+ IT should display up to the first 5 page numbers when available

## Inbetween pages

![image](img/pagination-inbetween.png)

e.g if 17 pages total 5-13

+ IT should display 2 pages either side of the current page

## Last 4 pages

![image](img/pagination-last.png)

e.g if 17 pages total 14-17

+ IT should display the 5 last page numbers
