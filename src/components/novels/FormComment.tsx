import React from 'react';
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
    const {field: commentText, fieldState: commentState} = useController({
        name: 'text',
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
    
    return (<Form className="mt-4" id="formReview" onSubmit={handleSubmit(onSubmit)} >
                <Input type="hidden" name="parent" id="contactparent" value=""/>
                <div className="form-group editContent" >
                    <Label htmlFor="contactcomment" class="editContent">
                        Ваш комментарий *
                    </Label>
                    <Input type="textarea" className="form-control border" rows="5" name="text"
                            id="contactcomment" {...commentText} />
                </div>
                <Button type="submit"
                        className="mt-3 btn btn-success btn-block py-3 btn-submit col-12">
                    Отправить
                </Button>
            </Form>);
})