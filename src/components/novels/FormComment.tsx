import React, { useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { SubmitHandler, useController, UseFormReturn } from 'react-hook-form';
import { NovelComment } from '../../models/Comment';
import { useSaveCommentMutation } from './commentsHookApi';


export const FormComment: React.FC<{
    form: UseFormReturn<NovelComment, any>;
    novelId: number
}>  = React.memo(({
    form: { control, handleSubmit },
    novelId
}) => {
//     const [formdata, setformdata] = useState({
//         comment:"",
//         email:"",
//         author:"",
//   });
  //const onChangeHandler= (field: string, value:string)=>(e:any)=>setformdata({...formdata,[field]:value})
    const {field: commentText, fieldState: commentState} = useController({
        name: 'text',
        control,
        rules: { required: 'Обязательное поле!' }
    });
    const {field: author, fieldState: authorState} = useController({
        name: 'name',
        control,
        rules: { required: 'Обязательное поле!' }
    });
    const {field: email, fieldState: emailState} = useController({
        name: 'email',
        control,
        rules: { required: 'Обязательное поле!' }
    });
    const saveMutation = useSaveCommentMutation()

    const onSubmit: SubmitHandler<NovelComment> = async (comment) => {
        await saveMutation.mutateAsync({
            ...comment,
            novel: novelId
        })
    }



    //const onSubmit = (data: any) => {console.log(data);}
    return (<Form className="mt-4" id="formReview" onSubmit={handleSubmit(onSubmit)} >
                <Input type="hidden" name="parent" id="contactparent" value=""/>
                <div className="form-group editContent" >
                    <Label htmlFor="contactcomment" class="editContent">
                        Ваш комментарий *
                    </Label>
                    <Input type="textarea" className="form-control border" rows="5" name="text"
                            id="contactcomment" {...commentText} />
                </div>
                <div className="d-sm-flex gap-3">
                    <div className="flex-grow-1 form-group p-0 editContent">
                        <Label htmlFor="contactusername" class="editContent">
                            Имя *
                        </Label>
                        <Input type="text" className="form-control border" name="name"
                            id="contactusername"  {...author}/>
                    </div>
                    <div className=" flex-grow-1 form-group ml-sm-3 editContent">
                        <Label htmlFor="contactemail" class="editContent">
                            Email *
                        </Label>
                        <Input type="email" className="form-control border" name="email"
                            id="contactemail"
                            placeholder="Your email"
                            {...email} />
                    </div>
                </div>
                <Button type="submit"
                        className="mt-3 btn btn-success btn-block py-3 btn-submit col-12">
                    Отправить
                </Button>
            </Form>);
})