import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { blogsData, fileEditorConfig } from '../../constants';
import { AddPostContainer } from './styles';

const AddPost = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [formState, setFormState] = useState({ title: '', content: '' });

    const handleImageUrlChange = (event) => setImageUrl(event.target.value);
    const handleTitleChange = (event) => setFormState({ ...formState, title: event.target.value });
    const handleEditorChange = (content) => setFormState({ ...formState, content });

    const handleSave = () => {
        const postData = {
            id: Date.now(),
            img: imageUrl,
            title: formState.title,
            content: formState.content,
        };

        const savedPosts = JSON.parse(localStorage.getItem('blogs')) || blogsData;
        savedPosts.push(postData);
        localStorage.setItem('blogs', JSON.stringify(savedPosts));

        setImageUrl('');
        setFormState({ title: '', content: '' });
    };

    return (
        <AddPostContainer>
            <h4>Add Post</h4>
            <div className="form-wrapper">
                <div className="inputs-wrapper">
                    <Input
                        data-cy="image-url"
                        type="text"
                        placeholder="Image url"
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                    />
                    <Input
                        data-cy="title"
                        type="text"
                        placeholder="Title"
                        value={formState.title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="background-img">{imageUrl && <img src={imageUrl} alt="User provided" />}</div>
                <div className="editor-wrapper">
                    <Editor
                        apiKey="jzrhm2oom536cjib2vjpjkrq36exqy92vm4puyl9fo9tdw37"
                        data-testid="editor"
                        init={{
                            height: 400,
                            menubar: true,
                            resize: false,
                            placeholder: 'Enter your content here...',
                            plugins: fileEditorConfig.plugins.join(' '),
                            toolbar: fileEditorConfig.toolbar.join(' | '),
                            content_style:
                                '@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;800&display=swap"); body { font-family:Rubik; font-size:14px }',
                            font_family_formats: Object.entries(fileEditorConfig.fonts)
                                .map((entry) => entry.join('='))
                                .join('; '),
                        }}
                        onEditorChange={handleEditorChange}
                        value={formState.content}
                    />
                </div>
            </div>
            <Button data-cy="button-submit" onClick={handleSave}>
                Save
            </Button>
        </AddPostContainer>
    );
};

export default AddPost;
