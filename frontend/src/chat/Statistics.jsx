export const Statistics = ({verdict, classtype, probability, probabilities}) => {	
	return (
		<div> 
            <div class="pt-5">
                class: {classtype}<br></br>
                probability: {probability} %<br></br>
                probabilities [accept, decline, suggestion]: {probabilities}<br></br>
                verdict: {verdict}
	        </div>
        </div>
	)
}