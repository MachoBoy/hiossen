import React from 'react';
import Dialog, { 
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

const DialogWindow = ({ title, content }) => (
    <div>
        <Dialog 
            transition={<Slide direction="up" />}
            keepMounted
        >
        <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </div>
)

export default DialogWindow;