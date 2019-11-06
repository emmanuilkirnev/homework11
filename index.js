var scheduale = prompt("Please enter Day");
var weekDay = scheduale.toLowerCase();;
var schedualeResult;


switch (weekDay) {

    case 'monday':

        schedualeResult = 'Working day';

        break;



    case 'tuesday':

        schedualeResult = 'Working day';

        break;



    case 'wednesday':

        schedualeResult = 'Working day';

        break;



    case 'thursday':

        schedualeResult = 'Working day';

        break;



    case 'friday':

        schedualeResult = 'Working day';

        break;



    case 'saturday':

        schedualeResult = 'Weekend';

        break;



    case 'sunday':

        schedualeResult = 'Weekend';

        break;



    default:

        schedualeResult = 'Please enter correct day';

        break;

}

alert(schedualeResult);