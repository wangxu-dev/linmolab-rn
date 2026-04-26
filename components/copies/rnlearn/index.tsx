import { TextInput, Text, View, Button, StyleSheet, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { loadTodos, createTodo, removeTodo } from './storage'
import type { RnlearnTodo } from '@/db/schema';

export default function rnlearn() {
    const [text, setText] = useState('');
    const [items, setItems] = useState<RnlearnTodo[]>([]);

    useEffect(() => {
        setItems(loadTodos());
    }, []);

    function handleAdd() {
        if (text.trim() === '') return;
        createTodo(text.trim());
        setItems(loadTodos());
        setText('');
    }

    function handleDelete(id: number) {
        removeTodo(id);
        setItems(loadTodos());
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                        placeholder='输入内容'
                    />
                    <Button title='Add' onPress={handleAdd} color='#841584' />
                </View>
                <View style={styles.list}>
                    {items.map((item, index) => (
                        <Pressable key={item.id} onPress={() => handleDelete(item.id)}>
                            <Text key={index} >
                                {index + 1}.{item.content}
                            </Text>
                        </Pressable>

                    ))}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    list: {
        marginTop: 24,
        gap: 12,
    },
    item: {
        fontSize: 16,
        color: '#333',
    },
});
