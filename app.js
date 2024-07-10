// Exercise 1 Section
function printOdds()
{
    for(i = 0; i <= 100; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}
printOdds();

// Exercise 2 Section
function checkAge(userName, age)
{
    if (age >= 16)
    {
        console.log(`Congrats ${userName}, you can drive!`);
    }
    else
    {
        console.log(`Sorry ${userName} but you will need to wait until you're 16!`);
    }
}
checkAge(`Noah`, 16)

//Exercise 3
function quadrantCheck(x, y)
{
    if (x == 0 && y == 0)
    {
        console.log(`${x},${y} is in the center`)
    }
    else if (x == 0)
    {
        console.log(`(${x},${y}) is on the y-axis`)
    }
    else if (y == 0)
    {
        console.log(`(${x},${y}) is on the x-axis`)
    }
    else if (x < 0 && y > 0)
    {
        console.log(`(${x},${y}) is in quadrant 2`)
    }
    else if (x > 0 && y > 0)
    {
        console.log(`(${x},${y}) is in quadrant 1`)
    }
    else if (x < 0 && y < 0)
    {
        console.log(`${x},${y} is in quadrant 3`)
    }
    else if (x > 0 && y < 0)
    {
        console.log(`(${x},${y}) is in quadrant 4`)
    }
}

quadrantCheck(0, 0)

//Exercise 4
function triangleCheck(a, b, c)
{ 
    if (a + b <= c || a + c <= b || b + c <= a)
    {
        console.log(`Invalid Triangle`);
    }
    else if (a == b && b == c)
    {
        console.log(`Equilateral Triangle`);
    }
    else if (a != b && b != c)
    {
        console.log(`Scalene Triangle`);
    }
    else if (a == b || b == c)
    {
        console.log(`Isosceles Triangle`);
    }
}

triangleCheck(5,4,6);

//Exercise 5
function phonePlan(planLimit, day, usage)
{
    let remainingUsage = planLimit - usage;
    let remainingDays = 30 - day;
    let averageDailyUse = usage / day;
    let safeDailyUse = 30 / planLimit;

    console.log(`${day} days used, ${remainingDays} days remaining\nAverage daily use: ${averageDailyUse} GB/day`);

    if (averageDailyUse > safeDailyUse)
    {
        console.log(`You are EXCEEDING your safe daily use of ${safeDailyUse}) GB/day,\ncontinue this high usage, you'll exceed your data plan by ${(averageDailyUse * 30) - planLimit} GB\nto stay below your plan, use no more than ${remainingUsage / remainingDays} GB/day`);
    }
    else if (averageDailyUse < safeDailyUse)
    {
        console.log(`You are BELOW your safe daily use limit of ${safeDailyUse}) GB/day,\nyou can increase your daily use to ${remainingUsage / remainingDays} GB/day`);
    }
    else
    {
        console.log(`You are using EXACTLY your safe daily use of ${safeDailyUse} GB/day,\nif you don't increase your usage, you will not exceed your data limit this month!`);
    }
}

phonePlan(30,20,10);