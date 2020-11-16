import { blue } from "@material-ui/core/colors";

export const GetStyle = theme => {
    return {
        root: {
            flexGrow: 1,
          },
          paper: {
            padding: 16,
            textAlign: 'left',
            border: '1px solid black'
            // color: '#000',
          },
          leftNav:{
              color: 'blue',   
              textDecorationLine: 'underline',
                            textDecorationColor: 'blue'         
          },
          add:{
              '& input':{
                width: '278px',
                height: '150px',
                margin: '15px 0'
            
              },
              '& button':{
                float: 'right',
                bottom: 0,   
                 width: '100px',
                lineHeight: '21px'
              }
          }
    }
};
