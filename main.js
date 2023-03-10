alert ('This web is responsive on all screens')

function CalculateGrade(event)
{

    {
        event.preventDefault()
    }

    let percentage = document.querySelector('#percentage').value; 

    switch (true) {
        case percentage <0 && percentage >100 :

        title = 'Invalid Percentage'

        explanation = 'Enter a value between 0 and 100'

        break;

        case percentage >=80 && percentage <=100 :

        title = 'A+ Grade'

        explanation = 'Congratulations! you have got A+ Grade'

        break;

        case percentage >=70 && percentage <80 :

        title = 'A Grade'

        explanation = 'Congratulations! you have got A Grade'

        break;

        case percentage >=60 && percentage <70 :

        title = 'B Grade'

        explanation = 'Good! you have got B Grade'

        break;

        case percentage >=50 && percentage <60 :

        title = 'C Grade'

        explanation = 'Good! you have got C Grade'

        break;

        case percentage >=40 && percentage <50 :

        title = 'D Grade'

        explanation = 'Oh! you have got D Grade'

        break;

        case percentage >=33 && percentage <40 :

        title = 'E Grade'

        explanation = 'Oh! you have got E Grade'

        break;

        default :

        title = 'Fail'

        explanation = 'Oye! fail hogya tuu...'

}

    document.querySelector('#title').innerHTML = title
    document.querySelector('#explanation').innerHTML = explanation

}