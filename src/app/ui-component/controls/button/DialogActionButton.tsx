import DialogActions from '@mui/material/DialogActions';
import { CustomComponents } from '@/app/ui-component';
import styles from "./dialogActionButton.module.css";

export default function DialogActionButton(props:any) {
  return (
    <>
        <DialogActions className={styles.fixedAtBottom}>
            <CustomComponents.CustomButton
                variant="contained"
                color="primary"
                text={props.text}
                type="submit"
            />
        </DialogActions>
    </>
  )
}
