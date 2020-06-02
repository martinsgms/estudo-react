import M from 'materialize-css';

const Toast = {
    message: (type, text) => {
        
        let color;

        if(type === 'success') color = 'green';
        if(type === 'error') color ='red';
        if(type === 'warning') color ='yellow';
        
        M.toast({
            html: text,
            classes: color,
            displayLength: 2000
        });    
    }
};

export default Toast;
