import DialogActions from '@mui/material/DialogActions';
import { CustomComponents } from '@/app/ui-component';
import styles from "./formDialog.module.css";

export default function DialogActionButton(props:any) {
  return (
    <>
      <DialogActions
        className={styles.fixedAtBottom}
        // sx={{ backgroundColor: (theme:any) => theme.palette.grey[500]}}
      >
        {props.children}
      </DialogActions>
    </>
  )
}
