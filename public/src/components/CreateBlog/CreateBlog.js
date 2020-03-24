import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
const CreateBlog = () => {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Blog Title" fullWidth="lg" />
                    <h3>Blog Content:</h3>
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        rows="10"
                        placeholder="Blog Content"
                        fullWidth="lg"
                    />
                </form>
            </Container>
        </React.Fragment>
    )
}

export default CreateBlog